import { Button, Modal, Text } from "@mantine/core";
import { useContext } from "react";
import CategoriesContext from "../store/CategoriesContext"; // import CategoriesContext provider
import HistoryContext from "../store/HistoryContext"; // import HistoryContext provider

// define the expected props for the HistoryModal component
type HistoryModalProps = {
  opened: boolean;
  setOpened: (state: boolean) => void;
  label: string;
  amount: number;
  dateCreated: string;
  id: string;
  type: string;
  category: string;
};

// define the HistoryModal function component with the expected props
const HistoryModal = ({
  opened,
  setOpened,
  label,
  amount,
  dateCreated,
  type,
  id,
  category,
}: HistoryModalProps) => {
  // use the useContext hook to access functions from the CategoriesContext and HistoryContext providers
  const { deleteHistoryElement } = useContext(HistoryContext);
  const { subtractCategoryAmount, addCategory } = useContext(
    CategoriesContext
  );

  // return the Modal component from the @mantine/core library with transaction details and buttons for deleting and exiting
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Transaction Details"
      styles={{
        title: {
          fontSize: 20,
        },
      }}
    >
      <Text>
        <span style={{ fontWeight: "bold" }}>Label:</span> {label}
      </Text>
      <Text>
        <span style={{ fontWeight: "bold" }}>Type:</span> {type}
      </Text>
      <Text>
        <span style={{ fontWeight: "bold" }}>Amount:</span> $
        {amount.toLocaleString()}
      </Text>
      <Text>
        <span style={{ fontWeight: "bold" }}>Category:</span> {category}
      </Text>
      <Text>
        <span style={{ fontWeight: "bold" }}>Date Created:</span> {dateCreated}
      </Text>
      <Text>
        <span style={{ fontWeight: "bold" }}>ID:</span> {id}
      </Text>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Button
          onClick={() => {
            setOpened(false); // close the modal when the Exit button is clicked
          }}
        >
          Exit
        </Button>
        <Button
          color="red"
          onClick={() => {
            // based on the type of transaction adjust the budget / expense amount accordingly
            deleteHistoryElement(id); // delete the transaction from the HistoryContext
            if (type === "Expenses Reset") {
              // put the returned expenses in the Uncategorized category
              addCategory({
                label: "Uncategorized",
                amount: amount,
                id: crypto.randomUUID(),
              });
            } else if (type === "Budget Reset") {
              // add the returned budget to the Budget category
              addCategory({
                label: "Budget",
                amount: amount,
                id: crypto.randomUUID(),
              });
            }
            subtractCategoryAmount(category, amount); // subtract the amount of the removed transaction from the category it belonged to
            setOpened(false); // close the modal after deleting the transaction
          }}
        >
          Delete Item
        </Button>
      </div>
    </Modal>
  );
};

export default HistoryModal; // export the HistoryModal component
