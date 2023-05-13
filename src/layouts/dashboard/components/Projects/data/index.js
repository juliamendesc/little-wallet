// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";
import SoftProgress from "@/components/SoftProgress";

import plusIcon from "@/assets/images/plus-circle.svg";

export default function data() {
  return {
    columns: [
      { name: "purpose", align: "left" },
      { name: "budget", align: "center" },
      { name: "completion", align: "center" },
      { name: "fund", align: "center", icon: "plusIcon" },
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
      },
      {
        purpose: ["", "Fix Platform Errors"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={100} />
          </SoftBox>
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
      },
    ],
  };
}
