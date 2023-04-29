// Import required modules and components
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";

// Define function for dark/light theme button
const DarkLightThemeButton = () => {
  // Initialize colorScheme and toggleColorScheme functions from useMantineColorScheme hook
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  // Set 'dark' variable based on the current color scheme
  const dark = colorScheme === "dark";

  // Return JSX for dark/light theme button
  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <FiSun size={18} /> : <BsMoonStars size={18} />}
    </ActionIcon>
  );
};

// Export DarkLightThemeButton function as default export of module
export default DarkLightThemeButton;
