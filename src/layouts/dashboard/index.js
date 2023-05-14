// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "@/examples/LayoutContainers/DashboardLayout";
import MiniStatisticsCard from "@/examples/Cards/StatisticsCards/MiniStatisticsCard";

// Dashboard layout components
import WorkWithTheRockets from "@/layouts/dashboard/components/WorkWithTheRockets";
import Projects from "@/layouts/dashboard/components/Projects";
import OrderOverview from "@/layouts/dashboard/components/OrderOverview";

// Data
import Transactions from "./components/Transactions";
import { useContext, useEffect } from "react";
import { LoginContext } from "@/context/loginContext";
import ETHBalance from "components/ETHBalance";
import Image from "next/image";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { shortenHex } from "@/util";

const Dashboard = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setIsConnecting,
    error,
    active,
    setIsAuthenticated,
    stopOnboarding,
    account,
  } = useContext(LoginContext);

  const balance = ETHBalance();

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

  return (
    isLoggedIn && (
      <DashboardLayout>
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Grid container justifyContent="space-around">
              <Grid item xs={12} sm={2} xl={2} marginTop={1}>
                <SoftBox component={NavLink} to="/" className="flex">
                  <Typography variant="h6" color="secondary">
                    <Image src="/noun_1.png" alt="Soft UI Logo" width={75} height={75} />
                  </Typography>
                  {account && (
                    <Typography variant="h6" color="secondary">
                      <p>Welcome!</p>
                      <p>Wallet: {shortenHex(account, 4)}</p>
                    </Typography>
                  )}
                </SoftBox>
              </Grid>
              <Grid item xs={12} sm={10} xl={8}>
                <MiniStatisticsCard
                  title={{ text: "Today's money" }}
                  count={balance.props.children[1]}
                />
              </Grid>
            </Grid>
          </SoftBox>
          <SoftBox mb={3}>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </SoftBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <OrderOverview />
            </Grid>
          </Grid>
          <SoftBox my={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Transactions />
              </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
      </DashboardLayout>
    )
  );
};

export default Dashboard;
