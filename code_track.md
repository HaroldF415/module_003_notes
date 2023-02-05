# Generator Functions

## What are `Generator Functions`?

<br />

**ChatGPT:**
Generator functions in JavaScript are special functions that can be paused during execution and later resumed, allowing the function to produce a series of values over time. They are defined using the `function*` syntax, and use the `yield` keyword to produce values one at a time. Generators are useful for implementing complex and asynchronous logic, as well as for working with infinite data streams.

**MDN web_docs:**
When a `generator function` is called, it does not immediately run its code. Instead, it returns a generator object.

```js
// the following code can be found in this same repo `./code/generatorFunctions.js`

// Let's create a simple `Generator Function`
function* generatorFunction() {
  console.log("Generator Function has been called");
}

const generatorObject = generatorFunction();

console.log(generatorObject);
// Output: Object [Generator] {}
```

In the code provided above we created a `Generator Function` and we can see that MDN WebDocs is right. I mean when is it not right. ^\_^. I then proceeded to call the function and store it in variable then `console.log()` that variable to see what was inside. Let's now make use of the `yield` expression

## Vocabulary

---

Asynchronous -

## Resources

---

[MDN - function\*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

[Code Wars - Generator Functions - Problem](https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript)

[How does Generator.next() processes its parameter?](https://stackoverflow.com/questions/37354461/how-does-generator-next-processes-its-parameter)
