# reactGuide

## About the course

You need to know:

### Basics and Foundation (Introduction)

- Components and building UIs
- Working with events and data: "props" and "state
- Styling React Apps and Components
- Introduction into "React Hooks"

### Advanced Concepts (Building for Production)

- Side Effects, "Refs" and More React Hooks
- Reacts Context API and Redux
- Forms, Http Requests and "Custom Hooks"
- Routing, Deployment, NextJS and more

### Summaries and Refreshers

- JS Refresher
- ReactJS Summary

### JS Exports and Imports

Default export:

```js
import person from './person.js'
import prs from './person.js'
```

Named Export

```js
import {smth} from './utility.js'
import {smth as Smth} from './utility.js'
import * from './utility.js'
// From this we could use:
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
//sayHi and sayBye are a functions in say.js
```

Lecture: <https://javascript.info/import-export>

### JS Classes

```js
class person {
  name = "Max"
  call = () => {}
}
class Person extends Master 
//Inherance

class Human {
  constructor() {
    this.gender = "male"
  }
  printGender(){
    console.log(this.gender)
  }
}

class person extends Human{
  constructor() {
    super()
    //needed for the parent constructor
    this.name = "Max";
    //this.gender = "female"
    //this chenge the gender
  }
  printMyName(){
    console.log(this.name)
  }
}
const person = new Person()
person.printMyName()
//To inherit
person.printGender()
```

Classes are usen in react to create its component

### Classes, Properties and Methods

You can skip the call to constructor call

```js
//use es6 or babel
class Human {
  gender = "male"
  printGender = () => {
    console.log(this.gender)
  }
}

class person extends Human{
  this.name = "Max";
  printMyName = () => {
    console.log(this.name)
  }
}
const person = new Person()
person.printMyName()
person.printGender()
```

### Spread and Rest Operators

The operator is just three dots

Used in spread:

```js
const newArray = [...oldArray, 1 ,2 ]
const newObj = {...oldObj, newProp:5}
```

Used as a Rest: Used to merge a list of function arguments into an awway

```js
function sortArgs(...args){
  return args.sort()
}
```

Example:

```js
const numbers = [1,2,3];
const newNumbers = [...numbers, 4]
console.log(newNumbers)

const person = {
  name: "max"
}
const newPerson = {
  ...person,
  age: 28
}
console.log(newPerson)

const filter = (...args) => {
  return args.filter(el => el === 1);
}
console.log(filter,1,2,3)
```

### Destructuring

Easily extract array elements or object properties and store them in variables

In an array:

```js
const numbers = [1,2,3]; 
[num1, ,num2] = numbers
console.log(num1,num3)
//1 and 3

{name} = {name: "max", age: 28}
console.log(name) //Max
console.log(age) //undefined
```

### Reference and Primitive Types

```js
const number = 1;
const num2 = number;
console.log(num2)
//you will have a copy, this is a reference, functions are primitive types

const person = {
  name: "max"
}
const secondPerson = person;
person.name = "manu"
console.log(secondPerson);
//this will print manu, not max
//person is stored in memory, the pointer will be copied, so each modification affects the same pointer too
// you are referencing the object, not copying it
```

### Refreshing Array Functions

```js
const numbers = [1,2,3]
const doubleNumArray = numbers.map((num) => {
  return num * 2
})
console.log(numbers)
console.log(doubleNumArray)
//1,2,3
//2,4,6
```

### JS Array Functions

Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc.

You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>

Particularly important in this course are:

map()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>
find()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find>
findIndex()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex>
filter()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>
reduce()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b>
concat()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b>
slice()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice>
splice()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice>

## React

### React and components

React allows u to create reusable an dreactive components consisting of html and js

react uses a declarative approach for building thiis components

U dont tell react that a element should be created and inserted ini a specific place like with vanilla js

u define the desired end state or the target state and let react figure out which element on the actual dom should work in (added, elminitaded, etc)

You only have to define the end states

You can build your own custom html elements

we start with npx create-react-app name-of-the-project

index js iis the first file loaded, well a transformed one

createRoot tells react where this react app should be placed in the web page that is loaded

and on that object selected we render something there

```js
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

App is a component rendered in root

with react we build our own html elements, our components

With the declarative approach, we define the desired target state(s) and let react figure out the actual dom js instructions

and this is our desired target state:

```js
function App() {
  return (
    //this is the desired end state
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
```

> imperative approach: give exactly steaps of what to do
App is a component used as:

```js
root.render(<App />);
```

Remember to put new components into new files

App component is not moved by the role on the app, due its a root component to built a component tree

So only the most top component is rendered only, but will be used as html inside of our html code inside our components

In react u name: ExpenseItem.js

lowecase elements are built in html, uppercase character are defined by u or other developer, we have the use the name from the import

```js
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
```

> duda: Se pueden usar arrow functions en jsx?

```js
function ExpenseItem() {
  return <h2>Expense item!</h2>
}
// const ExpenseItem = () => {
//   return <h2>Expense Item!!</h2>
// }

export default ExpenseItem;
```

React components must have only one root element per return statements, in other words, only one parent

we can fix it with one parent div

```js
function ExpenseItem() {
  return (
    <div>
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount:</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

### Applying CSS

we dont write class, we write className cuz class is a reserved word in js

```js
import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">265</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

```

### Dynamic Data

Components should be reusable. To also have changing data in jsx

```js
import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  //we can have js code in components 4 example to sent an http request
  //date obj cant be putput directed
  //at least with isos works and doesnt breaks

  const expenseTitle = "Car Insurance";
  const expenseAmount = 351;
  //betweet these curly braces u can run basic js expressions
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

### Passing Data via props

We can reuse it using multiple times the tag

```js
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
```

Components cant just use data stored in other components

So using props allow to use variables stored in parents or other components

our components can also have attributes, here is called props by properties.

In react to pass data well use the parameters to receive the data

props means it holds all the values from the attribute of a custom parent element

the key to acces should be the same as the attribute

```js
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
```

```js
import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

```

### Adding normal js logic to components

```js
import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <div>{props.date.toLocaleString('en-US', {month: 'long'})}</div>
        <div>Year</div>
        <div>Day</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

```

is okay,, but it could be better:

```js
import './ExpenseItem.css'

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();


  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

```

### Splitting components into multiple components

Sometime we could treat some elements as a different components

So we gotta break now ExpenseItem into ExpenseDate

ExpenseItem: 

```js
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
    <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

```

ExpenseDate:

```js
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();
  return(  
  <div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
  </div>
  )
}
export default ExpenseDate;
```

> ⚠️ Notice how the props are passed first to ExpenseItem and then to ExpenseDate
