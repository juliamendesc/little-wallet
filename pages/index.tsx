import { useState, useEffect, useMemo, useContext } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";

// Soft UI Dashboard React examples
import Sidenav from "@/examples/Sidenav";
import Configurator from "@/examples/Configurator";

// Soft UI Dashboard React themes
import theme from "@/assets/theme";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "@/context";

import brand from "public/logo.svg";

import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import { useWeb3React } from "@web3-react/core";
// Soft UI Dashboard React layouts
import Dashboard from "@/layouts/dashboard";
import Connect from "@/layouts/connect";

// Soft UI Dashboard React icons
import Shop from "@/examples/Icons/Shop";
import Document from "@/examples/Icons/Document";
import { LoginContext } from "@/context/loginContext";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  const dashboardProps = {
    account,
    library,
    triedToEagerConnect,
    isConnected,
    ETHBalance,
    TokenBalance,
  };

  const routes = [
    {
      type: "collapse",
      name: "Connect",
      key: "connect",
      route: "/connect",
      icon: <Document size="12px" />,
      component: <Connect triedToEagerConnect={triedToEagerConnect} />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "Dashboard",
      key: "dashboard",
      route: "/dashboard",
      icon: <Shop size="12px" />,
      component: <Dashboard dashboardProps={dashboardProps} />,
      noCollapse: true,
    },
  ];

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    if (document !== undefined) document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    if (document !== undefined) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

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
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Little Wallet"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            triedToEagerConnect={triedToEagerConnect}
          />
        </>
      )}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}
