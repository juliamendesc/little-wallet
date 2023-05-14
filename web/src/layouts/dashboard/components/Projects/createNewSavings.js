import { getRandomId } from "@/util";
import { Button, FilledInput, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { mockData } from "./data/mockedData";

const CreateNewSavings = ({ handleClose }) => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
    const { purpose, budget, startAmount } = data;
    const id = getRandomId(20);
    mockData.push({
      id,
      purpose: purpose,
      budget,
      completion: startAmount,
    });
    handleClose();
    console.log(mockData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputLabel type="text" htmlFor="purpose">
        Purpose:
      </InputLabel>
      <FilledInput id="purpose" {...register("purpose")} />
      <InputLabel htmlFor="budget">Budget:</InputLabel>
      <FilledInput type="number" id="budget" {...register("budget")} />
      <InputLabel htmlFor="startAmount">Start amount:</InputLabel>
      <FilledInput type="number" id="startAmount" {...register("startAmount")} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

CreateNewSavings.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default CreateNewSavings;
