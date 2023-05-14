import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { BrowserRouter } from "react-router-dom";

import { SoftUIControllerProvider } from "@/context";
import { useEffect, useState } from "react";
import LoginProvider from "@/context/loginContext";

export default function NextWeb3App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? (
    <BrowserRouter>
      <SoftUIControllerProvider>
          <LoginProvider>
            <Component {...pageProps} />
          </LoginProvider>
      </SoftUIControllerProvider>
    </BrowserRouter>
  ) : null;
}