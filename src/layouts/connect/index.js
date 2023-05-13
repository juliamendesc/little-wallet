// react-router-dom components
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";

// Authentication layout components

import BasicLayout from "./components/BasicLayout";
import Account from "components/Account";

import Hello from "../../../smartContracts/hello";

function Connect({ triedToEagerConnect, handleLogout }) {
  return (
    <BasicLayout title="Little Wallet" description="Connect your wallet for live demo.">
      <Card>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  <Account triedToEagerConnect={triedToEagerConnect} handleLogout={handleLogout} />
                  <Hello/>
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

Connect.propTypes = {
  triedToEagerConnect: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Connect;
