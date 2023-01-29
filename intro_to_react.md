# Intro To React [Notes]

## What is React.js

Let's start by defining what React is. At it's core, React is a Javascript library that was created and is still maintained by Facebook. At this point I asked myself what is a Javascript Library. Let's find out. A Javascript Library is a collection of pre-written code that developers can use quickly and efficiently to build UIs. One of the things about that sets React apart from other libraries and/ or frameworks is its component-based architecture. Instead of building a UI as one large, monolithic block of code, React allows us to break it down into smaller, reusable components. Each component has its own logic, state, and markup, and they can be easily combined to create more complex UIs.

At this point after looking up this information the description that the internet provides for React has me thinking about LEGOs. Hear me out.

React allows for building UIs in a modular way, similar to how LEGOs can be used to create various structures. Each React component can be thought of as a small, reausable brick that can be easily combined with others to form a more complex structure. This flexibility with React allows for a wide range of possibilitites, just as one can create different designs using LEGOs. My personal goal is to build a Death Star or the Millenium Falcon from Star Wars.

At this point I would like to deviate and ask the question:

## What is a React Component?

In React, a component is a piece of code that represents a part of a UI. It defines the structure, behavior, and presentation of a specific element on a web page, such as a button, a form, or a list. Components in React can be either functional or class-based, and they can be reused throughout the application. They accept inputs(props) and return a description of what should be rendered on the screen (JSX), React uses the virtual DOM to update the components and the actual DOM efficiently.

Here is a small sample of a React component:

```js
import React from "react";

const MyButton = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default MyButton;
```

Using [ES6](http://es6-features.org/) syntax this component is a function that takes an object called `props` as its argument, which can contain various properties such as `onClick` and `children`.

The component returns a button element in JSX, which is a syntax extension for Javascript that allows you to write HTML-like elements in your JavaScript code.

It can be used in other component like this:

```js
import MyButton from "./components/MyButton";

const App = () => {
  return (
    <div className="parentDiv">
      <MyButton onClick={() => console.log("clicked")}>
        <span>Click Me!</span>
      </MyButton>
    </div>
  );
};

export default App;
```

The code above display a very simple example, as we dive deeper into React components can be much more complex and include, logic, state, and lifecycle methods.

## ... What is React.js? (continued)

React's component-based architecture is more than just a way to organize code, it's a game-changer. It makes it easier to update and add new features, it makes the code more reausable and it allows us to keep the codebase clean and maintainable. Imagine being able to use the same piece of code in different parts of the application, saving you time and making the development process more efficient.

React's virtual DOM is a powerful performance optimization tool that allows for efficient

## Vocabulary

Monolithic
: refers to a system or structure that is composed of a single large unit or component, rather than being divided into smaller, independent parts. In software development, a monolithic application is one in which all of the functions and features are built and run as a single, unified program. this is in contrast to a microservice architecture, where the application is broken down into smaller, independedt services that can be developed, deployed, and scale separately.
