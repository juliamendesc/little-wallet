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

import {
  ADAPTER_EVENTS,
  CHAIN_NAMESPACES,
  CONNECTED_EVENT_DATA,
  SafeEventEmitterProvider,
  WALLET_ADAPTERS
} from '@web3auth/base'
import { Web3Auth, Web3AuthOptions } from '@web3auth/modal';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { SafeAuthKit, Web3AuthEventListener, Web3AuthModalPack } from '@safe-global/auth-kit';

// Soft UI Dashboard React icons
import Shop from "@/examples/Icons/Shop";
import Settings from "@/examples/Icons/Settings";
import { useSoftUIController } from "@/context";
import { LoginContext } from "@/context/loginContext";
import { useRouter } from "next/router";
import Logout from "@/layouts/dashboard/components/Logout";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
const WEB3_AUTH_CLIENT_ID = process.env.WEB3_AUTH_CLIENT_ID || 'BIjv_Kp1-IyxmtkB1G9BOXWBEYtO7CJZCUtew9vPiNVV-TdXT6Mkx-p1WaIQBMOeE5P5UmGi8xJrKJFX2ut2gtQ'
const connectedHandler: Web3AuthEventListener = (data) => console.log('CONNECTED', data)
const disconnectedHandler: Web3AuthEventListener = (data) => console.log('DISCONNECTED', data)

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { direction, layout, sidenavColor } = controller;
  const { pathname } = useLocation();
  const { isLoggedIn, setSafeAuth, safeAuth } = useContext(LoginContext);
  const router = useRouter();

  const routes = [
    {
      type: "collapse",
      name: "Main Account",
      key: "dashboard",
      route: "/dashboard",
      icon: <Shop size="12px" />,
      component: <Dashboard />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "Logout",
      key: "logout",
      route: "/logout",
      icon: <Settings size="12px" />,
      component: <Logout />,
      noCollapse: true,
    }
  ];

  useEffect(() => {
    console.log('===> isLoggedIn : ', isLoggedIn)
    if (!isLoggedIn) {
      router.push("/connect");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const options: Web3AuthOptions = {
      clientId: WEB3_AUTH_CLIENT_ID,
      web3AuthNetwork: 'testnet',
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: '0x27d8',
        rpcTarget: `https://rpc.chiado.gnosis.gateway.fm`
      },
      uiConfig: {
        theme: 'dark',
        loginMethodsOrder: ['google', 'facebook']
      }
    }

    const modalConfig = {
      [WALLET_ADAPTERS.METAMASK]: {
        label: 'metamask',
        showOnDesktop: true,
        showOnMobile: false
      }
    }

    const openloginAdapter = new OpenloginAdapter({
      loginSettings: {
        mfaLevel: 'default'
      },
      adapterSettings: {
        uxMode: 'popup',
        whiteLabel: {
          name: 'Safe'
        }
      }
    })

    const init = async () => {
      try {
        const web3AuthModalPack = new Web3AuthModalPack(options, [openloginAdapter], modalConfig)

        const safeAuthKit = await SafeAuthKit.init(web3AuthModalPack, {
          txServiceUrl: 'https://safe-transaction-goerli.safe.global'
        })

        safeAuthKit.subscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler)
        safeAuthKit.subscribe(ADAPTER_EVENTS.DISCONNECTED, disconnectedHandler)

        setSafeAuth(safeAuthKit)
      } catch (error) {
        console.error(error);
      }
    };

    init();
}, [])

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
      {isLoggedIn ? (
        <>
          <Sidenav color={sidenavColor} brand={brand} brandName="Tiny Vault" routes={routes} />
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </>
      ) : (
        <Connect />
      )}
    </ThemeProvider>
  );
}
