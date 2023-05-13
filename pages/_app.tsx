import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import getLibrary from "../getLibrary";
import "../styles/globals.css";
import { BrowserRouter } from "react-router-dom";

import { SoftUIControllerProvider } from "@/context";
import { useEffect, useState } from "react";
import LoginProvider from "@/context/loginContext";

function NextWeb3App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);
  return render ? (
    <BrowserRouter>
      <SoftUIControllerProvider>
        <LoginProvider>
          <Web3ReactProvider getLibrary={getLibrary}>
            <Component {...pageProps} />
          </Web3ReactProvider>
        </LoginProvider>
      </SoftUIControllerProvider>
    </BrowserRouter>
  ) : null;
}

export default NextWeb3App;
