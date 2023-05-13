import { useState, useEffect, useContext } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Soft UI Dashboard React examples
import Sidenav from "@/examples/Sidenav";

// Soft UI Dashboard React themes
import theme from "@/assets/theme";

import brand from "public/logo.svg";

// Soft UI Dashboard React layouts
import Dashboard from "@/layouts/dashboard";
import Connect from "@/layouts/connect";

// Soft UI Dashboard React icons
import Shop from "@/examples/Icons/Shop";
import Document from "@/examples/Icons/Document";
import { useSoftUIController } from "@/context";
import { LoginContext } from "@/context/loginContext";
import { useRouter } from "next/router";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { direction, layout, sidenavColor } = controller;
  const { pathname } = useLocation();
  const {
    isAuthenticated,
    isLoggedIn,
    setIsLoggedIn,
    isConnecting,
    setIsConnecting,
    setConnecting,
    triedToEagerConnect,
    web3,
    error,
    activate,
    chainId,
    account,
    setError,
    ENSName,
    active,
    setIsAuthenticated,
    connecting,
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useContext(LoginContext);
  const router = useRouter();

  const routes = [
    {
      type: "collapse",
      name: "Connect",
      key: "connect",
      route: "/connect",
      icon: <Document size="12px" />,
      component: <Connect />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "Dashboard",
      key: "dashboard",
      route: "/dashboard",
      icon: <Shop size="12px" />,
      component: <Dashboard />,
      noCollapse: true,
    },
  ];

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/connect");
    }
  }, [isLoggedIn]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav color={sidenavColor} brand={brand} brandName="Tiny Vault" routes={routes} />
        </>
      )}
      <Routes>
        {getRoutes(routes)}
        {isLoggedIn ? (
          <Route path="*" element={<Navigate to="/dashboard" />} />
        ) : (
          <Route path="*" element={<Navigate to="/connect" />} />
        )}
      </Routes>
    </ThemeProvider>
  );
}
