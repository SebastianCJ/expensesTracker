import React, { useState } from "react";
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import InputAdornment from '@material-ui/core/InputAdornment';

import { addExpense } from '../../redux/actions/expensesActions';

const CreateExpense = ({ classes, addExpense }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState("");
  const [total, setTotal] = useState(0);


  const handleChangeTotal = (cost, qty) => {
    let absCost = Math.abs(cost);
    let absQty = Math.abs(qty);
    setCost(String(absCost));
    setQty(String(absQty));
    setTotal((absCost*absQty).toFixed(2));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let expense = {title, description, cost, qty, total};
    addExpense(expense);
    setOpen(false);
    clearState();
  }

  const clearState = () => {
    setTitle("");
    setDescription("");
    setCost("");
    setQty("");
    setTotal(0);
    setOpen(false);
  }

  return (
    <>

    <Button 
      onClick={() => setOpen(true)} 
      variant='fab' 
      className={classes.fab} 
      color="secondary">
      {open ? <ClearIcon /> : <AddIcon /> }
    </Button>

    <Dialog open={open} className={classes.dialog} fullWidth>
      <DialogTitle>Create Expense</DialogTitle>
      <form onSubmit={event => handleSubmit(event)}>
      <DialogContent>
        <DialogContentText>
          Add a Cost, Description & Quantity 
        </DialogContentText>
        <FormControl fullWidth>
        <TextField
            onChange={event => setTitle(event.target.value)}
            label="Title"
            placeholder="Add a Tittle"
            className={classes.textField}
            autoFocus
            inputProps={{ maxLength: 25 }}
          />
          <TextField
            onChange={event => setDescription(event.target.value)}
            multiline
            rows="4"
            label="Description"
            placeholder="Add Description"
            className={classes.textField}
          />
          <TextField
            label="Cost"
            type="text" 
            pattern="[0-9]*"
            placeholder="0"
            step={0.1}
            onChange={event => handleChangeTotal(event.target.value, qty)}
            className={classes.textField}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <TextField
            label="Quantity"
            type="number"
            placeholder="Add Quantity"
            onChange={event => handleChangeTotal(cost, event.target.value)}
            className={classes.textField}
          />
          <TextField
            label="Total"
            value={total}
            type="number"
            InputProps={{
              readOnly: true,
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            className={classes.textField}
          />
        </FormControl>

      </DialogContent> 
      <DialogActions>
        <Button 
        variant="outlined"
          onClick={() => clearState()}
          className={classes.cancel}
        >
          Cancel
        </Button>
        <Button 
        variant="contained"
        color="secondary"
          disabled={
            !title.trim() || !cost.trim() || !description.trim() || !qty.trim()
          }
          type="submit"
          className={classes.save}
        >
          Add Expense
        </Button>
      </DialogActions>
      </form>
    </Dialog>
    </>
  );
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "white"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200"
  }
});

const mapStateToProps = (state) => ({
  expensesList: state.expensesReducer.expensesList
});

const mapDispatchToProps = {
  addExpense,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateExpense));
