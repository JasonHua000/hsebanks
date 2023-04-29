// Import required modules and components
import { Card, Text } from "@mantine/core";

// Define DisplayCardProps type for props of DisplayCard function
type DisplayCardProps = {
  label: string;
  amount: number;
  color: string;
};

// Define DisplayCard function with DisplayCardProps as its parameter
const DisplayCard = ({ label, amount, color }: DisplayCardProps) => {
  // Return a Card component with the label and amount of the card
  return (
    <Card
      shadow="sm"
      p="xl"
      mb={50}
      style={{ height: "250px", textAlign: "center" }}
    >
      <Text weight={500} size={35} mt="md">
        {label}
      </Text>
      <Text mt="xs" size={35} color={color} weight={500}>
        ${amount.toLocaleString("en-US")}
      </Text>
    </Card>
  );
};

// Export DisplayCard function as default export of module
export default DisplayCard;
