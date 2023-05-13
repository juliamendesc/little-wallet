import { Button, FilledInput, FormControl, InputLabel } from "@mui/material";
import PropTypes from "prop-types";

const CreateNewSavings = ({ handleClickAddRow }) => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("e", e);
    const purpose = e.target.value;
    const budget = e.target.value;
    const startAmount = e.target.value;
    console.log("purpose", purpose);
    console.log("budget", budget);
    console.log("startAmount", startAmount);
    // handleClickAddRow(purpose, budget, startAmount);
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel htmlFor="purpose">Purpose:</InputLabel>
        <FilledInput id="purpose" />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="budget">Budget:</InputLabel>
        <FilledInput id="budget" />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="startAmount">Start amount:</InputLabel>
        <FilledInput id="startAmount" />
      </FormControl>
      <FormControl fullWidth>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </FormControl>
    </>
  );
};

CreateNewSavings.propTypes = {
  handleClickAddRow: PropTypes.func.isRequired,
};

export default CreateNewSavings;
