import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import CreateExpense from './components/Expenses/CreateExpense';
import ExpensesList from './components/Expenses/ExpensesList';


const App = ({ classes }) => {
  return (
    <div className={classes.container} >
      <CreateExpense />
      <ExpensesList />
    </div>
  )
};


const styles = theme => ({
  container: {
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(App);
