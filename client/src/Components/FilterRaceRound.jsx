import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

export default function FilterRound({ data, urlPath, label, year }) {
  // State to hold the selected group of values
  const [dataGroup, setDataGroup] = React.useState([]);

  // Hook for navigation within the app
  const navigate = useNavigate();

  // Function to handle changes when multiple options are selected
  const handleChangeMultiple = (event) => {
    // Extract the 'options' property from the event target (the select element)
    const { options } = event.target;

    // Initialize an array to store the selected values
    const value = [];

    // Iterate through all the options in the select element
    for (let i = 0, l = options.length; i < l; i += 1) {
      // If an option is selected, add its value to the array
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    // Update the state with the selected values
    setDataGroup(value);

    // Log the selected values to the console for debugging purposes
    console.log("value: ", value);

    // If only one value is selected, update the URL and reload the page
    if (value.length === 1) {
      const selectedYear = value[0]; // Get the single selected value
      // Construct the URL using the `urlPath` and the selected value, then navigate to it
      window.location.href = `/${year}/${urlPath}/${selectedYear}`;
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: "30vw" }}>
        <InputLabel
          shrink
          htmlFor="select-multiple-native"
          sx={{ color: "white" }}
        >
          Select a {label}
        </InputLabel>
        <Select
          sx={{ color: "white" }}
          multiple
          native
          value={dataGroup}
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{
            id: "select-multiple-native",
          }}
        >
          {data.map((item) => (
            <option key={item} value={item.id}>
              {item.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
