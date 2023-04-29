import { useContext } from "react";
import { SimpleGrid, Text, Flex } from "@mantine/core";
import DisplayCard from "../components/DisplayCard";
import HistoryStack from "../components/HistoryStack";
import PageContainer from "../layout/PageContainer";
import PieChart from "../components/PieChart";
import { HiEmojiSad } from "react-icons/hi";
import { HiEmojiHappy } from "react-icons/hi";
import CategoriesContext from "../store/CategoriesContext";

const HomePage = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const budget = getTotalAmount("Budget");
  const expenses = getTotalAmount("Expenses");
  const netBalance = budget - expenses;

  return (
    <PageContainer>
      {/* Displays the net balance of the user */}
      <Flex
        direction="column"
        mb={3}
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[1]
              : theme.colors.gray[9],
        })}
      >
        <Text size={35} weight={700}>
          YOUR BALANCE IS: ${netBalance}
        </Text>
        {netBalance < 250 && (
          <Flex direction="row" align="center" mt={2}>
            <HiEmojiSad />
            <Text color="red" size={20} ml={2}>
              You are broke, better get a job.
            </Text>
          </Flex>
        )}
        {netBalance > 250 && (
          <Flex direction="row" align="center" mt={2}>
            <Text color="green" size={20}>
              You aren't broke anymore...  
            </Text>
            <HiEmojiHappy ml={2} />
          </Flex>
        )}
      </Flex>
      <SimpleGrid cols={2} style={{ justifyContent: "center" }}>
        <DisplayCard label="Your Money" amount={budget} color="green.4" />
        <DisplayCard label="Spending" amount={expenses} color="red.4" />
        <HistoryStack />
        {/* Only show the pie chart when either expenses or budget is greater than 0 */}
        {(budget > 0 || expenses > 0) && <PieChart />}
      </SimpleGrid>
    </PageContainer>
  );
};

export default HomePage;
