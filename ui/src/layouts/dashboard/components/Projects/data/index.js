// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";
import SoftProgress from "@/components/SoftProgress";

import plusIcon from "@/assets/images/plus-circle.svg";
import savingsIcon from "@/assets/images/icons8-savings-96.png";
import Image from "next/image";
import { Box } from "@mui/material";
import { mockData } from "./mockedData";

export default function data() {
  function handleClickAddRow(id, purpose, amount, startAmount) {
    const input = {
      id,
      purpose: [savingsIcon, purpose],
      budget: amount,
      completion: startAmount,
    };

    mockData.push(input);
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
      mockData.map((row) => {
        return {
          purpose: [savingsIcon, row.purpose],
          budget: (
            <SoftTypography variant="caption" color="text" fontWeight="medium">
              {row.budget}
            </SoftTypography>
          ),
          completion: (
            <SoftBox width="8rem" textAlign="left">
              <SoftProgress
                value={row.completion}
                color="info"
                variant="gradient"
                label={row.completion}
              />
            </SoftBox>
          ),
          fund: (
            <Box onClick={handleClick} className="cursor-pointer text-center mt-1">
              <Image src={plusIcon} alt="Soft UI Logo" width={20} height={20} />
            </Box>
          ),
        };
      }),
    ],
  };
}
