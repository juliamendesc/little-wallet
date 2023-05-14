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
import { useContext } from "react";
import { LoginContext } from "@/context/loginContext";
import ETHBalance from "components/ETHBalance";
import { Typography } from "@mui/material";
import { shortenHex } from "@/util";
import Image from "next/image";

import { ethers } from 'ethers'
import RPC from "../../web3RPC";

const Dashboard = () => {

  const account = null;
  const {
    isLoggedIn,
    safeUser,
    safeAuth,
    safeProvider
    // setIsLoggedIn,
    // setIsConnecting,
    // error,
    // account,
    // active,
    // setIsAuthenticated,
    // stopOnboarding,
  } = useContext(LoginContext);

  console.log(safeUser)
  //const balance = ETHBalance();

  const getBalance = async () => {
    const provider = new ethers.providers.Web3Provider(safeAuth?.getProvider());
    console.log('getBalance >> provider', provider)
    
    const rpc = new RPC(provider);
    console.log('getBalance >> rpc', rpc)

    const balance = await rpc.getBalance();

    console.log('getBalance >> balance', balance)
  };

  return (
    isLoggedIn && (
      <DashboardLayout>
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Grid container justifyContent="space-around">
              <Grid item xs={12} sm={2} xl={4}>
                <Typography variant="h6" color="secondary">
                  {safeUser && safeUser.address ? (
                    <Image
                      src={`https://noun-api.com/beta/pfp?name=${safeUser.address}`}
                      alt="Soft UI Logo"
                      width={75}
                      height={75}
                    />
                  ) : null}
                </Typography>
                {safeUser && (
                  <Typography variant="h6" color="secondary">
                    <p>Welcome!</p>
                    <p>Wallet: {shortenHex(safeUser.address, 4)}</p>
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={10} xl={8}>
                {console.log('GETBALANCE: ', getBalance())}
                <MiniStatisticsCard
                  title={{ text: "Today's money" }}
                  count={0} //balance.props.children[1]}
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
