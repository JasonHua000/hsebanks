// Import required modules
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "@mantine/core";

// Import custom contexts
import HistoryContext from "../store/HistoryContext";
import CategoriesContext from "../store/CategoriesContext";

// Define function to add budget element
const AddToBudget = () => {
  // Initialize contexts
  const { addCategory } = useContext(CategoriesContext);
  const { addHistoryElement } = useContext(HistoryContext);

  // Initialize state variables
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);

  // Initialize navigate hook
  const navigate = useNavigate();

  // Return JSX
  return (
    <div>
      {/* Input field for budget label */}
      <TextInput
        onChange={(e) => setLabel(e.currentTarget.value)}
        mt={20}
        size="md"
        w="40%"
        placeholder="Ex: Birthday Money"
        label="Label"
        withAsterisk
      />
      {/* Input field for budget amount */}
      <TextInput
        onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
        mt={20}
        size="md"
        w="40%"
        placeholder="Ex: 100"
        label="Amount"
        withAsterisk
      />
      {/* Button to add budget element */}
      <Button
        mt={20}
        onClick={() => {
          // Checks if the user input is valid
          if (label === "" || value <= 0 || Number.isNaN(value)) {
            // Alert user if input is invalid
            alert(
              "Invalid Entries. Make sure the label is not empty and the amount is greater than zero."
            );
          } else {
            // Add new budget element to categories context
            addCategory({
              label: "Budget",
              id: crypto.randomUUID(),
              amount: value,
            });

            // Navigate to home page
            navigate("/");

            // Add new history element to history context
            addHistoryElement({
              label: label,
              amount: value,
              id: crypto.randomUUID(),
              type: "Budget",
              dateCreated: "",
              category: "Budget",
            });
          }
        }}
      >
        Add To Budget
      </Button>
    </div>
  );
};

// Export the AddToBudget function as the default export of this module
export default AddToBudget;
