import React from "react";
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DescriptionIcon from "@material-ui/icons/Description";
import TextField from "@material-ui/core/TextField";

const ExpensesList = ({ classes, expensesList }) => {
    let total = 0;
    const formatNumber = (x) => Number.parseFloat(x).toFixed(2);

    const getTotal = () => {       
        expensesList.map((expense) => {
           return total += Number(expense.total)
        })
    }

    return (
        <>
        <List>
            {getTotal()}
            {expensesList.map((expense, index) => (
            <ExpansionPanel key={index}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <ListItem className={classes.root}>
                    <DescriptionIcon />
                    <ListItemText 
                    primaryTypographyProps={{
                        variant: "subheading",
                        color: "primary",
                    }}
                    primary="Title"
                    secondary={expense.title}
                    />
                    <ListItemText 
                    primaryTypographyProps={{
                        variant: "subheading",
                        color: "primary",
                    }}
                    primary="Cost"
                    secondary={`$ ${formatNumber(expense.cost)}`}
                    />
                    <ListItemText 
                    primaryTypographyProps={{
                        variant: "subheading",
                        color: "primary",
                    }}
                    primary="Qty"
                    secondary={expense.qty}
                    />
                    <ListItemText 
                    primaryTypographyProps={{
                        variant: "subheading",
                        color: "primary",
                    }}
                    primary="Total"
                    secondary={`$ ${formatNumber(expense.total)}`}
                    />

                </ListItem>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <Typography variant="body1"> 
                        {expense.description}
                    </Typography>
                </ExpansionPanelDetails>

            </ExpansionPanel>
            ))}
        </List>
        {total > 0 &&
        <div className={classes.divTotal}>
            <TextField 
            id="outlined-read-only-input"
            label="Total Expenses"
            value={`$ ${formatNumber(total)}`}
            className={classes.textField}
            margin="normal"
            InputProps={{
                readOnly: true,
            }}
            variant="outlined"
            />
        </div>
        }
     </>
    )
 }

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  details: {
    alignItems: "center",
    backgroundColor: "#e3e3e3",
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
  },
  divTotal: {
    display: "flex",
    justifyContent: "flex-end",
    margin: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

const mapStateToProps = (state) => ({
    expensesList: state.expensesReducer.expensesList
  });
  
  const mapDispatchToProps = {
    
  };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExpensesList));
