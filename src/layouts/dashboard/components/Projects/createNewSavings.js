import SoftInput from "@/components/SoftInput";
import { Button, FilledInput, FormLabel } from "@mui/material";

const CreateNewSavings = () => {
  return (
    <>
      <FormLabel className="mb-2" htmlFor="purpose">
        Purpose:
      </FormLabel>
      <FilledInput id="purpose" />
      <FormLabel htmlFor="budget">Budget:</FormLabel>
      <FilledInput id="budget" />
      <FormLabel htmlFor="startAmount">Start amount:</FormLabel>
      <FilledInput id="startAmount" />
      <Button type="submit">Submit</Button>
    </>
  );
};

export default CreateNewSavings;
