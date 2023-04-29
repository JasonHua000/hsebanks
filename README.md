Documentation (for each page):

AddBudgetPage -->
Import statements:
 * Import Divider and Text components from the "@mantine/core" library.
 * Import AddToBudget, SetBudget, and ResetValueModal custom components.
 * Import PageContainer layout component.
 * Import useContext hook from "react".
 * Import CategoriesContext from the store.

 AddBudgetPage component:
 * Define a functional component called AddBudgetPage.
 * Extract the getTotalAmount function from the CategoriesContext using the useContext hook.
 * Calculate the current budget value using the getTotalAmount function.
 
Return JSX:
 * Wrap the entire content in the PageContainer component.
 * Display a title and a subtitle for setting the budget amount, followed by the SetBudget component.
 * Add a Divider component for visual separation.
 * Display a title and a subtitle for adding money, followed by the AddToBudget component.
 * Add another Divider component for visual separation.
 * Display the ResetValueModal component, which allows the user to reset the budget value.

Export the AddBudgetPage component:
 * Export the AddBudgetPage component as the default export.

AddExpensesPage -->
AddExpensePage component:
 * Define a functional component called AddExpensePage.
 * Extract the getTotalAmount function from the CategoriesContext using the useContext hook.
 * Calculate the current expense value using the getTotalAmount function.

Return JSX:
 * Wrap the entire content in the PageContainer component.
 * Display a title and a subtitle for adding an expense, followed by the AddToExpenses component.
 * Add a Divider component for visual separation.
 * Display the ResetValueModal component, which allows the user to reset the expense value.

Export the AddExpensePage component:
 * Export the AddExpensePage component as the default export

DisplayCategoriesPage--> 
DisplayCategoriesPage component:
 * Define a functional component called DisplayCategoriesPage.

Return JSX:
 * Wrap the entire content in the PageContainer component.
 * Display a title "Spending Categories" with specified text properties and style based on the theme.
 * Display the DisplayCategories component, which shows the spending categories.

Export the DisplayCategoriesPage component:
 * Export the DisplayCategoriesPage component as the default export.

HomePage --> 
Return JSX:
 * Wrap the entire content in the PageContainer component.
 * Display the user's net balance and an emoji with a message based on the net balance.
 * Use the SimpleGrid component to create a responsive grid layout.
 * Display DisplayCard components for the budget and expenses.
 * Display the HistoryStack component, which shows the transaction history.
 * Conditionally display the PieChart component when either the budget or expenses are greater than 0.
 
Export the HomePage component:
 * Export the HomePage component as the default export.