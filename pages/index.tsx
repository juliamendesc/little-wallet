import { useState, useEffect } from "react";

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

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

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
          <Sidenav color={sidenavColor} brand={brand} brandName="Tiny Vault" routes={routes} />
        </>
      )}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}
