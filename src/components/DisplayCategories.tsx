// Import required modules and components
import { useContext } from "react";
import { SimpleGrid } from "@mantine/core";
import DisplayCard from "./DisplayCard";
import CategoriesContext from "../store/CategoriesContext";

// Define DisplayCategories function
const DisplayCategories = () => {
  // Get categories from CategoriesContext using useContext hook
  const { categories } = useContext(CategoriesContext);

  // Return a SimpleGrid component with DisplayCard components for each category
  return (
    <SimpleGrid cols={4} style={{ justifyContent: "center" }}>
      {categories.map((category) => (
        <DisplayCard
          key={category.id}
          label={category.label}
          amount={category.amount}
          color="gray.6"
        />
      ))}
    </SimpleGrid>
  );
};

// Export DisplayCategories function as default export of module
export default DisplayCategories;
