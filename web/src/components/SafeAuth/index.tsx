/* eslint-disable react/jsx-filename-extension */
import { useContext, useEffect, useState } from "react";

// import {
//   ADAPTER_EVENTS,
//   CHAIN_NAMESPACES,
//   SafeEventEmitterProvider,
//   WALLET_ADAPTERS
// } from '@web3auth/base'

import SoftButton from "../SoftButton";
import { SafeAuthKit, Web3AuthEventListener, Web3AuthModalPack } from '@safe-global/auth-kit';
// import { Web3AuthOptions } from '@web3auth/modal';
// import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { LoginContext } from "@/context/loginContext";
import { useRouter } from "next/router";

// const WEB3_AUTH_CLIENT_ID = process.env.WEB3_AUTH_CLIENT_ID || 'BIjv_Kp1-IyxmtkB1G9BOXWBEYtO7CJZCUtew9vPiNVV-TdXT6Mkx-p1WaIQBMOeE5P5UmGi8xJrKJFX2ut2gtQ'
// const connectedHandler: Web3AuthEventListener = (data) => console.log('CONNECTED', data)
// const disconnectedHandler: Web3AuthEventListener = (data) => console.log('DISCONNECTED', data)

function SafeAuth({ }) {
  // const [safeAuth, setSafeAuth] = useState<SafeAuthKit<Web3AuthModalPack>>()
  const { login, safeAuth } = useContext(LoginContext);
  const router = useRouter();
  
  // useEffect(() => {
  //     const options: Web3AuthOptions = {
  //       clientId: WEB3_AUTH_CLIENT_ID,
  //       web3AuthNetwork: 'testnet',
  //       chainConfig: {
  //         chainNamespace: CHAIN_NAMESPACES.EIP155,
  //         chainId: '0x27d8',
  //         rpcTarget: `https://rpc.chiado.gnosis.gateway.fm`
  //       },
  //       uiConfig: {
  //         theme: 'dark',
  //         loginMethodsOrder: ['google', 'facebook']
  //       }
  //     }

  //     const modalConfig = {
  //       [WALLET_ADAPTERS.METAMASK]: {
  //         label: 'metamask',
  //         showOnDesktop: true,
  //         showOnMobile: false
  //       }
  //     }

  //     const openloginAdapter = new OpenloginAdapter({
  //       loginSettings: {
  //         mfaLevel: 'default'
  //       },
  //       adapterSettings: {
  //         uxMode: 'popup',
  //         whiteLabel: {
  //           name: 'Safe'
  //         }
  //       }
  //     })

  //     const init = async () => {
  //       try {
  //         const web3AuthModalPack = new Web3AuthModalPack(options, [openloginAdapter], modalConfig)
  
  //         const safeAuthKit = await SafeAuthKit.init(web3AuthModalPack, {
  //           txServiceUrl: 'https://safe-transaction-goerli.safe.global'
  //         })
  
  //         safeAuthKit.subscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler)
  //         safeAuthKit.subscribe(ADAPTER_EVENTS.DISCONNECTED, disconnectedHandler)
  
  //         setSafeAuth(safeAuthKit)
        
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     init();
  // }, [])

  const start = async () => {
    if (!safeAuth) return

    const signInInfo = await safeAuth.signIn()
    console.log('SIGN IN RESPONSE: ', signInInfo)
    const userInfo = await safeAuth.getUserInfo()
    console.log('USER INFO: ', userInfo)

    login(safeAuth.getProvider(), userInfo || undefined)

    router.push("/dashboard");
    //setSafeAuthSignInResponse(response)
    //setProvider(safeAuth.getProvider() as SafeEventEmitterProvider)
  };

  return (
      <SoftButton variant="gradient" color="dark" fullWidth onClick={start}>
        Start
      </SoftButton>
  );
}

export default SafeAuth;