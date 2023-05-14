// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";

// Authentication layout components

import BasicLayout from "./components/BasicLayout";
import SafeAuth from "@/components/SafeAuth";

function Connect() {
  return (
    <BasicLayout
      className="text-black"
      title="Tiny Vault"
      description="Connect your wallet for live demo."
    >
      <Card>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mt={1} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                <SafeAuth />
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default Connect;
