# Quick notes

Npm will transfor the code to optimise it, so npm will not just look our code but tranform it in a more effiicient way, we only have to code in a frliendy way.

For example normally we cant import css files into js but with npm help we can.

> Remeber: index is the first file to load

With root render we tall what should be rendered in that element, we want to render APP

In react we define the desired state, and react is remponsible to load the components

App should not be going in components folder as its a root file

Remember to build a component tree

Export default is that you only want to export one object or function or element from the file

In React components you only can have one root element per return or per jsx code snippet for example not 2 divs at the same level

## CSS

For the css we can add a css file with the same name of the component and import it to the js file

and we well use classname instead of class in our jsx tags

## Dynamic data

We cant work with hard coded data in our jsx tags, we want to receive data from somewhere.

We well work with dynamic data in jsx with curly bracets, like:

```js
function ExpenseItem() {
  const expenseDate = new Date(2021,2,28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className='expense-item'>
      <div>March 28th 2021</div>
      <div className='expense-item__description'>
        //here
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>$294.67</div>
      </div>
    </div>
  );
}
```

We could use also js expressions inside the curly bracets like {1+1} or {Math.random()}

Remember, date object cannot be print in just curly bracets, you need de iosString method

## Passing data via props

We need parameters like in js functions to print different results using the same function

> Props stands for properties

We make components reusable allowing parameters as props

For example, we have in the app component a variable called goalItem, and we have to output the data inside another component inside

```js
<App>
  const goalItem = "finish!"
  <CourseGoalItem>
    <li>{goalItem}<li>
  </CourseGoalItem>
<App/>
```

The variable lives in the App component, it makes the value independent(it is good)

But we dont have direct access, we can pass data to the customed components by an attribute and then we can get access to all these attributes passed by the parameter

```js
<App>
  const goalItem = "finish!"
  <CourseGoalItem text={goalItem}>
    <li>{props.text}<li>
  </CourseGoalItem>
<App/>
```

> the parameter props can be named data or whatever you want, but it is only one parameter

```js
<h2>{props.name}</h2>
//The key to acces the parameter props HAVE TO be the same as the key we put to create or call the component
<ExpenseItem
  name={expenses[0].title}
  amount={expenses[0].amount}
  date={expenses[0].date}
></ExpenseItem>
```

## Adding "normal" logic to components

Remember, you can create variables to catch or transform the data and put it directly the data already transformed in the component during the return

```jsx
function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {month: '2-digit'});
  const year = props.date.getFullYear();
  
  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}
```

## Splitting Components

Remember to always import first the js files then the css ones

Remember to funnel the data, props our or way to passing data remember

We pass data from App to ExpenseItem and to ExpenseDate
