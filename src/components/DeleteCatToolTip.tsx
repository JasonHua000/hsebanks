// Import required modules and components
import { ActionIcon, Tooltip } from "@mantine/core";
import { AiOutlineInfoCircle } from "react-icons/ai";

// Define function for delete category tooltip
const DeleteCatToolTip = () => {
  // Return JSX for tooltip component
  return (
    <Tooltip
      label="Select a category and click 'Delete Category' to delete the selected category. This will only delete the category from the dropdown menu. You cannot delete a category that is being used."
      color="gray.8"
      withArrow
      multiline
      width={400}
    >
      <ActionIcon variant="transparent">
        <AiOutlineInfoCircle />
      </ActionIcon>
    </Tooltip>
  );
};

// Export DeleteCatToolTip function as default export of module
export default DeleteCatToolTip;
