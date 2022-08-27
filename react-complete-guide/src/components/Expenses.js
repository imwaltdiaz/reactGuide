import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
      title={props.title}
      amount={props.amount}
      date={props.date}
    ></ExpenseItem>
    <ExpenseItem
      title={props.title}
      amount={props.amount}
      date={props.date}
    ></ExpenseItem>
    <ExpenseItem
      title={props.title}
      amount={props.amount}
      date={props.date}
    ></ExpenseItem>
    <ExpenseItem
      title={props.title}
      amount={props.amount}
      date={props.date}
    ></ExpenseItem>
    </div>
  )
}
export default Expenses