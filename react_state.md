# React `useState`

In React.js `state` is an object that holds data and is used to manage the components' behavior and render data to the UI. It is considered to be one of the most important concepts in React. It is used to store and manage a component's local or internal data that can change over time and affects the component's behavior and render output.

## `state` example

Let's take a `toggle` component that shows `on` or `off` based on the state of a switch. The state of the toggle component could be represented as a `boolean` value, with `true` representing `on` and `false` representing `off`. The state can be initialized in the constructor and then updated using `setState()` method when the `toggle` switch is clicked. The component will re-render whenever the state changes, updating the displayed text from `on` to `off` or vice-versa.

```jsx
// #1
import React from "react";

// #2
import { useState } from "react";

// #3
const App = () => {
  // #4
  const [toggleValue, setToggleValue] = useState("on");

  // #5
  const handleToggle = () => {
    if (toggleValue) {
      setToggleValue("off");
    } else {
      setToggleValue("on");
    }
  };

  // #6
  return (
    <div className="parent-container">
      <button onClick={handleToggle}>{toggleValue}</button>
    </div>
  );
};

// #7
export default App;
```

---

## Let's dissect the following code line by line:

## `#1`

```js
import React from "react";
```

This line of code imports the `React` library from the `react` package in your project. The React library is the core of the React.js framework and provides the basic features and functions for building React components. By importing the React library, you have access to the core React API and can start using React to build your application.

## `#2`

```js
import { useState } from "react";
```

This line of code imports the `useState` hook from the React library. `useState` is a hook that allows you to add state to your functional components in React.

In React, sate is a way of storing and managing data that can change over time and affects the component's behavior as explained above in the introduction.

## `#4`

```js
const [toggleValue, setToggleValue] = useState("on");
```

This code declares a state value in the `App` functional component using the `useState` hook. The `useState` hook takes an initial state value as its argument, which is passed as the first argument to the `useState` function call.

In this case, the initial state value is `on`. The `useState` hook returns an array with two elements: the current state value, and a function to update the state value. These two elements are destructured and assigned to the variables `toggleValue` and `setToggleValue` respectively.

- `toggleValue` holds the current state value which is `on`.

- `setToggleValue` function can be used to update the state value whenever necessary.

## `#3` and `#7`

```js
const App = () => {};
export default App;
```

This code defines a functional component in `React` called `App` and exports it as the default export.

A functional component is a JavaScript function that returns a React Element. It is a simpler alternative to class components and is used to define small, reusable components in React. The `App` component takes no arguments and returns an empty function for now.

The `export default` syntax makes the `App` component the default export of the file it is defined in. This means that when this file is imported into another file, the importing file can choose to give the imported component any name they like, or they can use the default name...`App`.

## `#5`

```js
const handleToggle = () => {
  if (toggleValue) {
    setToggleValue("off");
  } else {
    setToggleValue("on");
  }
};
```

This code defines a function called `handleToggle` that updates the value of the `toggleValue` state when it is called.

The function then uses an `if` statement to determine the current value of `toggleValue` and then updates it using the `setToggleValue` function. If `toggleValue` is truthy, the function sets it to `off`. If `toggleValue` is falsy, the function sets it to `on`.

## `#6`

```js
return (
  <div className="parent-container">
    <button onClick={handleToggle}>{toggleValue}</button>
  </div>
);
```

This code defines the render output for the `App` component. In this case the render output is a `div` element that contains a `button` element. The text inside the `button` element is the current value of the `toggleValue` state, which is passed to the component using curly braces `{}`.

The `button` element also has an `onClick` prop, which is set to the `handleToggle` function. This means that when the button is clicked, the `handleToggle` function will be called and update the value of the `toggleValue` state.

In summary, this code creates a `button` component that displays the current value of the `toggleValue` state and updates it when the button is clicked. The button is contained inside a parent-div.

---

## Rendering components in `React.js`

Rendering in React refers to the process of taking the virtual DOM ( a JavaScript representation of the UI components and their properties) and converting it into actual HTML elements that can be displayed in a web page.

In React, rendering is performed automatically when a component's state or properties change. The React library then updates the real DOM with the changes made to the virtual DOM. This process is known as "reconciliation" and it helps keep the real DOM in sync with the virtual DOM, minimizing the amount of manual DOM manipulation required.

React components can be rendered in multiple places, either on the `server-side` or `client-side`.

- On the `server-side`, React can be used to generate `HTM`L that is sent to the client, which can improve the performance and `SEO` of a web application.

- On the `client-side`, React components are typically rendered using a `DOM` library, such as `React DOM`, which maps the `virtual DOM` to the `real DOM`.

When a component is rendered, it is transformed into actual HTML elements, which can be seen and interacted with by the user. The process of rendering in React is performed automatically whenever there are changes to the state or properties of a component, ensuring that the UI is always up-to-date and responsive to user interactions.

## Stateless Components vs Stateful Components
