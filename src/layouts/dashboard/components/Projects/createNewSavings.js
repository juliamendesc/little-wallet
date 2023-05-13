import { Button, FilledInput, FormLabel } from "@mui/material";

const CreateNewSavings = () => {
  return (
    <div className="flex">
      <FormLabel className="mb-2" htmlFor="purpose">
        Purpose:
      </FormLabel>
      <FilledInput id="purpose" />
      <FormLabel htmlFor="budget">Budget:</FormLabel>
      <FilledInput id="budget" />
      <FormLabel htmlFor="startAmount">Start amount:</FormLabel>
      <FilledInput id="startAmount" />
      <div className="flex flex-row justify-end content-end	pb-4">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  );
};

export default CreateNewSavings;
