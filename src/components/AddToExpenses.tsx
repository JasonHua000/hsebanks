// Import required modules
import { Button, Divider, MultiSelect, Text, TextInput } from "@mantine/core";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Import custom contexts
import AvailableCategoriesContext from "../store/AvailableCategoriesContext";
import CategoriesContext from "../store/CategoriesContext";
import HistoryContext from "../store/HistoryContext";

// Import custom tooltip component
import DeleteCatToolTip from "./DeleteCatToolTip";

// Define interface for available categories
interface AvailableCategories {
  label: string;
  value: string;
  isused: string;
}

// Define function to add expense element
const AddToExpenses = () => {
  // Initialize contexts
  const { addHistoryElement } = useContext(HistoryContext);
  const { availableCategories, setAvailableCategories } = useContext(
    AvailableCategoriesContext
  );
  const { addCategory } = useContext(CategoriesContext);

  // Initialize state variables
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState<string[]>([""]);
  const navigate = useNavigate();

  // Return JSX
  return (
    <div>
      {/* Input field for expense label */}
      <TextInput
        onChange={(e) => setLabel(e.currentTarget.value)}
        mt={20}
        size="md"
        w="40%"
        placeholder="Ex: Car payments"
        label="Label"
        withAsterisk
      />
      {/* Input field for expense amount */}
      <TextInput
        onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
        mt={20}
        size="md"
        w="40%"
        placeholder="Ex: 3000"
        label="Amount"
        withAsterisk
      />
      <Divider mt={30} mb={20} />
      {/* Text heading for selecting a category */}
      <Text
        size="xl"
        weight={700}
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
        })}
      >
        Add a Category to Your Expense
      </Text>
      {/* Multiselect dropdown for selecting or creating a category */}
      <MultiSelect
        w="40%"
        mt={10}
        data={availableCategories}
        label="Select a Category"
        placeholder="Select a category or create a new one"
        searchable
        creatable
        value={category}
        onChange={setCategory}
        maxSelectedValues={1}
        getCreateLabel={(query) =>
          `+ Create ${query[0].toUpperCase() + query.substring(1)}`
        }
        onCreate={(query) => {
          const capQuery = query[0].toUpperCase() + query.substring(1);
          const item: AvailableCategories = {
            value: capQuery,
            label: capQuery,
            isused: "false",
          };
          console.log("hello");

          // Add new category item to available categories context
          setAvailableCategories((current) => [item, ...current]);
          return item;
        }}
      />
      {/* Buttons for adding and removing categories */}
      <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
        {/* Button to add expense */}
        <Button
          mr={30}
          onClick={() => {
            if (label === "" || value <= 0 || Number.isNaN(value)) {
              alert(
                "Invalid Entries. Make sure the label is not empty and the amount is greater than zero."
                );
                } else {
                // Check if user has selected a category
                if (
                category[0] === undefined ||
                category[0] === null ||
                category[0] === ""
                ) {
                // If no category selected, set category to 'Uncategorized'
                category[0] = "Uncategorized";
                }

                          // Add new expense element to categories context
          addCategory({
            label: category[0],
            amount: value,
            id: crypto.randomUUID(),
          });

          // Set the isused property of the available category selected to true
          setAvailableCategories((prev) => {
            return prev.map((c) => {
              if (c.label === category[0]) {
                c.isused = "true";
              }
              return c;
            });
          });

          // Navigate back to the home page
          navigate("/");

          // Add new history element to history context
          addHistoryElement({
            label: label,
            amount: value,
            id: crypto.randomUUID(),
            type: "Expense",
            dateCreated: "",
            category: category[0],
          });
        }
      }}
    >
      Add Expense
    </Button>
    {/* Button to remove category */}
    <Button
      color="red"
      onClick={() => {
        // Check if user has not selected a category
        if (category[0] === "") {
          alert("No category has been selected!");
        } else {
          // If user has selected a category

          // Uncategorized cannot be removed
          if (category[0] === "Uncategorized") {
            alert("Uncategorized cannot be removed!");
            return;
          }

          let removed = false; // Used to check if the category has been removed

          // Remove the category from available categories context if it exists and is not being used
          setAvailableCategories((prev) => {
            // Create a hard copy of the previous category state
            const arr: AvailableCategories[] = JSON.parse(
              JSON.stringify(prev)
            );

            arr.forEach((c, index) => {
              if (c.label === category[0] && c.isused === "false") {
                arr.splice(index, 1);
                removed = true;
              }
            });

            return arr;
          });

          // If the category has not been removed, then it is being used. Show an alert to notify the user.
          removed
            ? null
            : alert(
                "Category cannot be removed since it is being used."
              );
        }
      }}
    >
      Remove Category
    </Button>
    {/* Tooltip component for explaining the remove category functionality */}
    <DeleteCatToolTip />
  </div>
</div>
);
};

// Export the AddToExpenses function as the default export of this module
export default AddToExpenses;
