# Intro To React [Notes]

## What is React.js

Let's start by defining what React is. At it's core, React is a Javascript library that was created and is still maintained by Facebook. At this point I asked myself what is a Javascript Library. Let's find out. A Javascript Library is a collection of pre-written code that developers can use quickly and efficiently to build UIs. One of the things about that sets React apart from other libraries and/ or frameworks is its component-based architecture. Instead of building a UI as one large, monolithic block of code, React allows us to break it down into smaller, reusable components. Each component has its own logic, state, and markup, and they can be easily combined to create more complex UIs.

At this point after looking up this information the description that the internet provides for React has me thinking about LEGOs. Hear me out.

React allows for building UIs in a modular way, similar to how LEGOs can be used to create various structures. Each React component can be thought of as a small, reausable brick that can be easily combined with others to form a more complex structure. This flexibility with React allows for a wide range of possibilitites, just as one can create different designs using LEGOs. My personal goal is to build a Death Star or the Millenium Falcon from Star Wars.

At this point I would like to deviate and ask the question:

## What are React components?

In React, a component is an independent/ reausable piece of code that represents a part of a UI. It defines the structure, behavior, and presentation of a specific element on a web page, such as a button, a form, or a list. Components in React can be either functional or class-based, and they can be reused throughout the application. They accept inputs(props) and return a description of what should be rendered on the screen (JSX), React uses the virtual DOM to update the components and the actual DOM efficiently.

Here is a small sample of a React component:

```js
// components/MyButton.js

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
// src/App.js

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

## What are `props`?

`Props` or `properties` in React refer to the data that is passed into a component by it's parent. Props are used to initialize the state of the component and can be passed as attributes in JSX. Inside the component props are received as arguments, similar to how parameters are passed to a function in Javascript. Utilizing props allows for dynamic data flow within the application, and it should be noted that props in React are read-only and cannot be modified.

```js
// components/NewComponent.js
import React from "react";

const NewComponent = (props) => {
  return (
    <div className="parent">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default NewComponent;
```

This component takes in two properties or `props`, which are `title` and `description`, and renders them inside a `div` element.

Therefore it can be used like this:

```js
// src/App.js
import NewComponent from "./components/NewComponent";

const App = () => {
  return (
    <div className="container">
      <NewComponent title="Hello World!" description="Description of something will go here." />
    </div>
  );
};

export default App;
```

So in the example above we have the `NewComponent` component is being passed two props, `title` and `description`, as attributes in JSX. Inside the component, these props are accessed as properties of the `props` object and are used to render dynamic content. It should be noticed that the component can't modify the props it recieves, because they are read-only.

## ... What is React.js? (continued)

React's component-based architecture is more than just a way to organize code, it's a game-changer. It makes it easier to update and add new features, it makes the code more reausable and it allows us to keep the codebase clean and maintainable. Imagine being able to use the same piece of code in different parts of the application, saving you time and making the development process more efficient.

React's virtual DOM is a powerful performance optimization tool that allows for efficient updates to the UI. It works by creating a light-weight representation of the actual DOM and only re-rendering the components that have been changed.

This results in three things:

- responsive UIs
- improved performance
- allows for scalability

In simpler terms, when an update is made to a component, React compares the virtual DOM to the actual DOM, and only makes changes where necessary.

## Why should we learn React.js?

React is a popular and widely adopted library. It has a large and active community that contributes to its development and maintenance, and there are a lot of resources and tutorials available to help developers learn and use React effectively.

## Library vs. Framework

At this point I ask myself what is the difference between a Javascript Library and a Framework. We already established that a Javascript Library is a collection of pre-written code that developers can use to accomplish specific tasks. It allows developers to easily implement common functionality into their application without having to write the code themselves.

A framework on the other hand, is a set of rules and guidelines for building and structuring an application. It provides a foundation on which developers can build their application, but it also imposes certain limitations on how the application should be structured and how the code should be written. It's like a sorta blueprint for building a house, it gives you the plans but also leaves room for customization.

When I was researching how to make a presentation about React.js I came across some keywords to describe it:

- Reuseable
- Dynamic

So I Googled: `How is reusable and dynamic related to React`

- [How to Create Dynamic Components in React](https://www.educative.io/answers/how-to-create-dynamic-components-in-react)

p.s reading this article got me curious on even more questions which I will do some research on.....maybe.

First let's connect the word `reuseanble` to React.js:

React's component-based architecture allows for the creation of `reausable` components. This means that developers can create a component once and use it multiple times. Additionally, React's virtual DOM allows for efficient updates to the UI, which enables developers to create dynamic content that can change based on user interactions or other factors. This allows for creating an interactive and engaging user experience.

## ... Why should we learn React.js? (continued)

Why are we learning it here in this bootcamp? right? there are other programming languages out there that we could be focusing on like Angular, Vue, or Svelte. Why is React.js so popular with Web developers. After googling I found this nifty Gist. [Frontend Frameworks Popularity](https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190) by [Tanguy Krotoff](https://gist.github.com/tkrotoff)

It suggests that React.js still reigns champ among other Javascript Libraries and Frameworks. But let's go back to completing projects in Pursuit. So far we've completed many labs and slowly our codebase has grown. In one of our most recent projects we tackled accessing APIs. One of the main challenges in building these interactive web pages with vanilla Javascript is the difficulty in organizing and mainting the code. As the files grow larger and the lines of code become more lengthy, it can be hard to find the specific pieces that need to be updated, and it can be difficult to create reusable code. React addresses these issues by providing its component-based architecture. Once again this provides maintaiable, efficient, reausable code. It allows for creating an interactive and engaing UX, easy. It allows for updating new features a breeze while maintaing the codebase clean. I think that wev've all seen creating logic to update multiple components led to spaghetti code. It may not be apparent now, because of the scale of our projects but spaghetti code can lead to slow and inneficient DOM manipulation.

Finally React.js is a third-party open-source library that is widely adopted by developers and companies. One of the key benefits of using an open-source library like React.js is the ability to take advantage of the contributions of a large community of developers. The community continually improves and maintains the library, adding new features and fixing bugs, making it a reliable choice for building web applications. Additionally, as an open-source project, React.js is free for anyone to use and contribute to, making it cost-effective option for development.

## Functional Components vs Class Components

Functional components and Class components are two ways to define components in React. Functional components are simpler, more concise, and easier to understand and maintain compared to class components. They are declared as functions and receive props as an argument, and return a React element.

```js
import React from "react";

const myComponent = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
};

export default myComponent;
```

Class components, on the other hand, are declared as classes and extend the React.Component base class. They have access to lifecycle methods and state, which can't be used in functional components.

```js
import React, { Component } from "react";

class myComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}
```

In general, if your component just needs to render based on props, use a functional component. If you need to use state, lifecycle methods, or need performance optimization, use a class component.

## Stateless Components vs Stateful Components

## Vocabulary

Monolithic : refers to a system or structure that is composed of a single large unit or component, rather than being divided into smaller, independent parts. In software development, a monolithic application is one in which all of the functions and features are built and run as a single, unified program. this is in contrast to a microservice architecture, where the application is broken down into smaller, independent services that can be developed, deployed, and scale separately.

Reuseable: capable of being used again or repeatedly

Dynamic: marked by usually continuous and productive activity or change.
