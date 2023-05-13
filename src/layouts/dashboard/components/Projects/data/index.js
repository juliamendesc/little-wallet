// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";
import SoftProgress from "@/components/SoftProgress";

import plusIcon from "@/assets/images/plus-circle.svg";
import Image from "next/image";
import { Box } from "@mui/material";

export default function data() {
  function handleClickAddRow(purpose, amount) {
    rows.push({
      purpose: ["", purpose],
      budget: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          ${amount}
        </SoftTypography>
      ),
      completion: (
        <SoftBox width="8rem" textAlign="left">
          <SoftProgress value={0} color="info" variant="gradient" label={0} />
        </SoftBox>
      ),
      fund: (
        <Box onClick={handleClick} className="cursor-pointer text-center mt-1">
          <Image src={plusIcon} alt="Soft UI Logo" width={20} height={20} />
        </Box>
      ),
    });
  }

  function handleClick() {
    console.log("clicked");
  }

  return {
    handleClickAddRow,
    columns: [
      { name: "purpose", align: "left" },
      { name: "budget", align: "center" },
      { name: "completion", align: "center" },
      { name: "fund", align: "center" },
    ],

    rows: [
      {
        purpose: ["", "Soft UI XD Version"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={60} color="info" variant="gradient" label={60} />
          </SoftBox>
        ),
        fund: (
          <Box onClick={handleClick} className="cursor-pointer text-center mt-1">
            <Image src={plusIcon} alt="Soft UI Logo" width={20} height={20} />
          </Box>
        ),
      },
      {
        purpose: ["", "Add Progress Track"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={10} color="info" variant="gradient" label={10} />
          </SoftBox>
        ),
        fund: (
          <Box onClick={handleClick} className="cursor-pointer text-center mt-1">
            <Image src={plusIcon} alt="Soft UI Logo" width={20} height={20} />
          </Box>
        ),
      },
      {
        purpose: ["", "Fix Platform Errors"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left" onClick={handleClick}>
            <SoftProgress value={100} color="success" variant="gradient" label={100} />
          </SoftBox>
        ),
        fund: (
          <Box onClick={handleClick} className="cursor-pointer text-center mt-1">
            <Image src={plusIcon} alt="Soft UI Logo" width={20} height={20} />
          </Box>
        ),
      },
      {
        purpose: ["", "Launch our Mobile App"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={100} />
          </SoftBox>
        ),
        fund: (
          <Box onClick={handleClick} className="cursor-pointer text-center mt-1">
            <Image src={plusIcon} alt="Soft UI Logo" width={20} height={20} />
          </Box>
        ),
      },
      {
        purpose: ["", "Add the New Pricing Page"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $500
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={25} color="info" variant="gradient" label={25} />
          </SoftBox>
        ),
        fund: (
          <Box onClick={handleClick} className="cursor-pointer text-center mt-1">
            <Image src={plusIcon} alt="Soft UI Logo" width={20} height={20} />
          </Box>
        ),
      },
    ],
  };
}
