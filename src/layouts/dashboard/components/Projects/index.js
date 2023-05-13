// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "@/examples/Tables/Table";

// Data
import data from "@/layouts/dashboard/components/Projects/data";
import SoftButton from "@/components/SoftButton";
import { Box, Modal } from "@mui/material";
import CreateNewSavings from "./createNewSavings";
import { useState } from "react";
import SoftProgress from "@/components/SoftProgress";
import Image from "next/image";
import plusIcon from "@/assets/images/plus-circle.svg";

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

function Projects() {
  const { columns, rows, handleClickAddRow } = data();
  const [open, setOpen] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card>
      <SoftBox
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignContent="space-between"
        pt={3}
        px={3}
      >
        <SoftBox>
          <SoftTypography variant="h6" gutterBottom>
            Savings
          </SoftTypography>
        </SoftBox>
        <SoftButton color="info" variant="gradient" onClick={handleOpen}>
          Create new savings plan
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
            <CreateNewSavings handleClickAddRow />
          </Box>
        </Modal>
      )}
      <SoftBox
        sx={{
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </SoftBox>
    </Card>
  );
}

export default Projects;
