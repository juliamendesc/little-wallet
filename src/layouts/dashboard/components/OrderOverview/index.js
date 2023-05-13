// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "@/examples/Timeline/TimelineItem";
import SoftButton from "@/components/SoftButton";
import CreateNewStake from "./createNewStake";
import { useState } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function OrdersOverview() {
  const [open, setOpen] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card>
      <SoftBox
        pt={3}
        px={3}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignContent="space-between"
      >
        <SoftTypography variant="h6" fontWeight="medium">
          Stake - Invest in your future
        </SoftTypography>
        <SoftButton color="info" variant="gradient" onClick={handleOpen}>
          Request new stake
        </SoftButton>
      </SoftBox>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CreateNewStake />
          </Box>
        </Modal>
      )}
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
        />
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
