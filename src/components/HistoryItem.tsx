// Import required modules and components
import { useState } from "react";
import { Card, Text } from "@mantine/core";
import HistoryModal from "./HistoryModal";

// Define HistoryItemProps interface
type HistoryItemProps = {
  label: string;
  amount: number;
  type: string;
  id: string;
  dateCreated: string;
  category: string;
};

// Define HistoryItem component
const HistoryItem = ({
  label,
  amount,
  type,
  id,
  dateCreated,
  category
}: HistoryItemProps) => {
  // Declare and initialize state variable for modal
  const [opened, setOpened] = useState(false);

  // Set color of card border based on type of transaction
  const color =
    type === "Budget" || type === "Expenses Reset" ? "#69DB7C" : "#FF8787";

  // Return a Card component that displays transaction label and amount, with onClick event to open modal
  // If label length exceeds 44 characters, truncate it and add ellipsis
  return (
    <>
      <HistoryModal
        opened={opened}
        setOpened={setOpened}
        label={label}
        amount={amount}
        type={type}
        dateCreated={dateCreated}
        id={id}
        category={category}
      />
      <Card
        shadow="sm"
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRight: `4px solid ${color}`,
        }}
        onClick={() => {
          setOpened(true);
        }}
      >
        <Text weight={500} size={15}>
          {label.length > 44 ? label.slice(0, 44) + "..." : label}
        </Text>
        <Text size={15} color={color} weight={500}>
          {type === "Budget" || type === "Expenses Reset" ? "+" : "-"}$
          {amount.toLocaleString("en-US")}
        </Text>
      </Card>
    </>
  );
};

// Export HistoryItem component as default export of module
export default HistoryItem;
