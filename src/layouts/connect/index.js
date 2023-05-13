// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";
import SoftButton from "@/components/SoftButton";

// Authentication layout components

import BasicLayout from "./components/BasicLayout";
import Account from "components/Account";

// eslint-disable-next-line react/prop-types
function Connect({ triedToEagerConnect }) {
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
                  <Account triedToEagerConnect={triedToEagerConnect} />
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default Connect;
