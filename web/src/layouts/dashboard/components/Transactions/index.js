// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";

// Billing page components
import { transactionsMockData } from "./mock";
import Transaction from "../Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%", width: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Latest transactions
        </SoftTypography>
        <SoftBox display="flex" alignItems="flex-start">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {transactionsMockData.map((transaction) => (
            <Transaction
              key={transaction.id}
              color={transaction.color}
              icon={transaction.icon}
              name={transaction.name}
              description={transaction.description}
              value={
                transaction.value === "Pending"
                  ? transaction.value
                  : transaction.color === "error"
                  ? "-" + transaction.value
                  : "+" + transaction.value
              }
            />
          ))}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Transactions;
