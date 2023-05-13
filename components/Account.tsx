import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useContext, useEffect, useState } from "react";
import { injected } from "../connectors";
import useENSName from "../hooks/useENSName";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import { formatEtherscanLink, shortenHex } from "../util";
import SoftButton from "@/components/SoftButton";
import SoftTypography from "@/components/SoftTypography";
import { Link } from "react-router-dom";
import { LoginContext } from "@/context/loginContext";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    isAuthenticated,
    login,
    logout,
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
    setConnecting,
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useContext(LoginContext);

  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  if (typeof account !== "string") {
    return (
      <div>
        {isWeb3Available ? (
          <SoftButton
            variant="gradient"
            color="dark"
            fullWidth
            disabled={connecting}
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            <SoftTypography
              component={Link}
              to="/authentication/sign-in"
              variant="button"
              color="white"
              fontWeight="bold"
              textGradient
            >
              {isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"}
            </SoftTypography>
          </SoftButton>
        ) : (
          <SoftButton variant="gradient" color="dark" fullWidth onClick={startOnboarding}>
            Install Metamask
          </SoftButton>
        )}
      </div>
    );
  }

  return (
    <a
      {...{
        href: formatEtherscanLink("Account", [chainId, account]),
        target: "_blank",
        rel: "noopener noreferrer",
      }}
    >
      Your wallet: {ENSName || `${shortenHex(account, 4)}`}
      <a href="#" className="close">
        X
      </a>
    </a>
  );
};

export default Account;
