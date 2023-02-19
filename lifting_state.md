# Lifting State

---

What is `lifting state`? Welp in the world of `React` ( a Javascript library ), `lifting state` refers to the act of transferring the `state` of a `child` component to its `parent` component.

This `state` can then be shared among various `child` components, thus eliminating the need for duplication and streamlining the management of data. The `parent` component functions as a the `state provider`, sending the `state` down to its `child` components in the form of `props`. These `child` components can access and modify the `state` as necessary, which results in a more centralized and easily manageable `state management process`. This technique of `lifting state` serves as a means to increase scalability and maintainability, ensuring that the application remains in good shape even as it grows and evolves over time.

## Data Flow

In React data flows down. When you add a prop, to a `child` component from a `parent` component, it becomes available inside the `child` component. Let's try it out:

```js
// inside App.js
import React from "react";
import Progress from "./Components/Progress";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Ari",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Joshua",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Diandre",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Keannu",
  },
  {
    amount: 30,
    caption: "Come visit me in Brooklyn!",
    id: 5,
    name: "Harold",
  },
];

const donationTotal = donations.reduce((total, donation) => total + donation.amount, 0);
// donationTotal will have a value of 345

const App = () => {
  return (
    <div className="parent-container">
      <Progress donationTotal={donationTotal} targetAmt={targetAmount} />
    </div>
  );
};

export default App;
```

<br/>

## The code above shows the `data` being sent from the `parent` component `App.js` to the `child` component named `Progress`. It is sent to the `child` component inside a `props` object that holds the properties we just defined in `App.js` ( `donationTotal` and `targetAmt` ). At this point the `child` component can access this data inside its scope because of this `props` object. To be clear the `props` object is read-only meaning the `child` component cannot modify the data that is held inside the `props` object. It can only use the `data` it was sent do render inside its scope. The `parent` component is in charge of tracking those changes and then sending it down the `flow of data`. Let's see how it would look there:

<br/>

```js
// inside Progress.js
const Progress = (props) => {
  return (
    <div className="progress-container">
      <h2>
        Raised ${props.donationTotal} of ${props.targetAmt}
      </h2>
    </div>
  );
};
// Output: <h2> Raised $345 of $1000 </h2>
export default Progress;
```

<br/>

## We could use `props` or we could use object destructuring. Like this:

<br/>

```js
// inside Progress.js
const Progress = ({ donationTotal, targetAmt }) => {
  return (
    <div className="progress-container">
      <h2>
        Raised ${donationTotal} of ${targetAmt}
      </h2>
    </div>
  );
};
// Output: <h2> Raised $345 of $1000 </h2>
export default Progress;
```

<br />

## Both blocks of code evaluate to the same thing.

<br />

---

<br/>

## [Thinking in `React`](https://reactjs.org/docs/thinking-in-react.html)

As we immerse ourselves deeper into React, we will discover how complex the framework really is. React changes the way you think when building an app. While I go over the readings from my bootcamp about `lifting state` there are a few objectives they mention:

The following will be from my boot-camp readings:

- Understand that data only flows down in React.
- Learn where state should go.
- Learn how to lift state.

There is a specific way to
