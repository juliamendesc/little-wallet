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

const Dashboard = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setIsConnecting,
    error,
    activate,
    chainId,
    account,
    setError,
    ENSName,
    active,
    setIsAuthenticated,
    stopOnboarding,
  } = useContext(LoginContext);

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
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} xl={6}>
                <MiniStatisticsCard
                  title={{ text: "Today's money" }}
                  count="$53,000"
                  percentage={{ color: "success", text: "+55%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={6}>
                <MiniStatisticsCard
                  title={{ text: "Blocked money" }}
                  count="2,300"
                  percentage={{ color: "success", text: "+3%" }}
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
