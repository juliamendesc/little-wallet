import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useContext, useEffect } from "react";
import { injected } from "../connectors";
import { formatEtherscanLink, shortenHex } from "../src/util";
import SoftButton from "@/components/SoftButton";
import { Link } from "react-router-dom";
import { LoginContext } from "@/context/loginContext";
import SoftTypography from "@/components/SoftTypography";

const Account = () => {
  const {
    isAuthenticated,
    isLoggedIn,
    setIsLoggedIn,
    isConnecting,
    setIsConnecting,
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

  async function handleClick() {
    setIsConnecting(true);

    await activate(injected, undefined, true).catch((error) => {
      // ignore the error if it's a user rejected request
      if (error instanceof UserRejectedRequestError) {
        setIsConnecting(false);
        setIsLoggedIn(false);
      } else {
        setError(error);
      }
    });
  }

  useEffect(() => {
    if (active || error) {
      if (active) {
        setIsLoggedIn(true);
      }
      setIsConnecting(false);
      stopOnboarding();
    }

    return () => {
      setIsLoggedIn(false);
      setIsAuthenticated(false);
    };
  }, [active, error, stopOnboarding]);

  console.log("isLoggedIn", isLoggedIn);

  if (typeof account !== "string") {
    return (
      <div>
        {isWeb3Available ? (
          <SoftButton
            variant="gradient"
            color="dark"
            fullWidth
            disabled={connecting || isConnecting}
            onClick={handleClick}
          >
            <SoftTypography
              component={Link}
              to="/authentication/sign-in"
              variant="button"
              color="inherit"
              fontWeight="bold"
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
    isLoggedIn && (
      <a
        {...{
          href: "/dashboard",
          rel: "noopener noreferrer",
        }}
      >
        Your wallet: {ENSName || `${shortenHex(account, 4)}`}
      </a>
    )
  );
};

export default Account;
