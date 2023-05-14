import SoftInput from "@/components/SoftInput";
import { getRandomId } from "@/util";
import {
  Button,
  FilledInput,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import { stakeMockData } from "./mockData";

const CreateNewStake = ({ handleClose }) => {
  const { register, handleSubmit, control } = useForm();

  function onSubmit(data) {
    const { duration, amount } = data;
    const id = getRandomId(20);
    stakeMockData.push({
      id,
      duration,
      amount,
    });
    handleClose();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputLabel htmlFor="amount">Amount</InputLabel>
      <FilledInput {...register("amount")} id="amount" type="number" />
      <FormLabel id="demo-radio-buttons-group-label">Duration</FormLabel>
      <Controller
        rules={{ required: true }}
        control={control}
        name="duration"
        render={({ field }) => (
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            {...field}
          >
            <FormControlLabel value="1 week" control={<Radio />} label="1 week" />
            <FormControlLabel value="1 month" control={<Radio />} label="1 month" />
            <FormControlLabel value="1 year" control={<Radio />} label="1 year" />
          </RadioGroup>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

CreateNewStake.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default CreateNewStake;
