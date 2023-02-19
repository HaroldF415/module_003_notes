# Generator Functions

There is a class held every Saturday by Jordan Manley an Instructor at Pursuit. His knowledge in this industry just leaves me with my mouth open every time I'm allowed to be near his orbit. On 02/04/2023 we went over some HTML/CSS then hoped over to React. Before the study session was complete we had some time and he opened the floor to questions. A particular individual brought up that they were asked about `Generator Functions` at a Front-End Dev interview. This topic puzzled me so much that I thought for a moment I was Joe Pesci in the set of Home Alone 2 with his head burning.

<div style="width: 300px;">
<img src="https://media.giphy.com/media/xUySTzIkXBalTgDBKw/giphy.gif"  alt="home-alone-2">
</div>

---

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

In the code provided above we created a `Generator Function` and we can see that MDN WebDocs is right. I mean when is it not right. right?. I then proceeded to call the function and store it in variable, then `console.log()` that variable to see what was inside. Now that we have accomplished to find out what was inside that variable. Let's now make use of the `yield` expression/operator

<br>

---

## What is `yield`?

<br/>

The `yield` operator is utilized to temporarily halt and restart a `generator function`. The result of the expression after the `yield` keyword is passed back to the caller of the `generator`. It can be considered as a generator-based equivalent of the `return` keyword.

```js
function* generatorFunction() {
  yield 1;
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());
// Output: { value: 1, done: false }
```

<br>

At this point I'm asking myself...

---

## What is `.next()`?

<br/>

The `.next()` method returns an object with two properties `done` and `value`. We can also provide a value to the `.next()` method to send a value to the `generator`. So something like this:

```js
generatorObject.next(2);
```

The code above is calling the `.next()` method on a `generator` object, and passing and argument `2`. This argument is used to provide a `value` to the `generator` function, which can be accessed using the `yield` operator. For example in the `generator` function we could write it like this:

```js
function* generatorFunction() {
  const num = yield;

  console.log(num);
}

const generatorObject = generatorFunction();

generatorObject.next(2);

// Output: ?
```

This is where it starts to get <strong style="font-size: 20px;">weird</strong>.

MDN indicates that this line `generatorObject.next(2)` will not log anything out. Because the generator was not yielding anything initially.

In the code further up I had something like this:

```js
function* generatorFunction() {
  yield 1;
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());
// Output: { value: 1, done: false }
```

But when I added a value to the `.next()` like this:

```js
function* generatorFunction() {
  yield 1;
  const num = yield;
  console.log(num);
}

const generatorObject = generatorFunction();

generatorObject.next(2);
// Output: ?
```

Nothing printed out. Will go back to this later. But let's move forward with the example in MDN docs:

```js
function* generatorFunction() {
  const num = yield;
  console.log(num);
}

const generatorObject = generatorFunction();

// The first value in `.next()` will be lost and nothing will be printed out
generatorObject.next(1);

// Output: none

// The second value in the `.next()` will print out
generatorObject.next(2);

// Output: 2
```

The first line that we write after creating the `generatorObject` is the `.next()` method. The value that we insert there is lost during the first pass because the `generator` function has not yet executed any code. The second call to the `.next()` method on a `generator` object, will run the `generator`'s code until it reaches a `yield` keyword, at which point it pauses execution and returns a value. If you pass a value into the `.next()` method a second time, it will be available as the result of the current `yield` expression when the `generator` function is resumed. This is one way we can provide information to the `generator` function from outside its own scope, this will allow us to control its flow and behavior.

<br>

But as it stands the first time we make a call to the `generator` function with this line of code:

```js
generatorObject.next(1);
```

It will not pass in a value, so the `generator` function will pause execution at the `yield` expression and wait for a value to be passed in.

<br>

> <span style="font-size: 19px">What I believe is happening here in my own words is that since the first time we call on the `.next()` method with a value. Since the `generator` function doesn't have anything in yield. Then the first value passed on the first try with `.next()` that value will be lost. I sort of get it. But then I don't. - <i>Harold F.</i></span>

<br>

The second call to the `generator` object in this example passes in the value of `2`, which is then assigned to the `number` variable. The `generator` function will then resume its execution and log out the value of `number`, which is `2`.

In general, values passed into the `.next()` method of a `generator` function are used to provide a value to a `yield` expression. The `yield` expression acts as a pause point in the `generator` functions, allowing you to return a value an control the flow of execution.

<br>

---

<br>

<span style="font-size: 15px;">Now that we've found out what `yield` and `.next()` do let's move forward with the original code at the top of the `code_track.md`.</span>

```js
function* generatorFunction() {
  console.log("Generator Function has been called.");
}

const generatorObject = generatorFunction();

generatorObject.next();
// Output: "Generator Function has been called."
```

So let's implement what we've just read. It's easy to understand that just calling the `generator` function like this will allow the console.log() to log. But let's add the `yield` expression with a value. Then console.log() that value.

```js
function* generatorFunction() {
  console.log("Generator Function has been called.");
  yield 1;
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());
// Output: "Generator Function has been called."
// Output: {value: 1, done: false}
```

Let's call `.next()` one more time:

```js
function* generatorFunction() {
  console.log("The generator function has been called.");
  yield 1;
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());
// Output: "Generator Function has been called."
// Output: { value: 1, done: false }

console.log(generatorObject.next());
// Output: { value: undefined, done: true }
```

<br>

The `.next()` method of a `generator` function allows you to run the function's code incrementally, one `yield` expression at a time. As explained above when you call the `.next()` method, the `generator` function runs its code until it reaches a `yield` expression. At that point, it returns an object with two properties: `value` and `done`. The `value` property is set to the value specified by the `yield` expression and the `done` property is set to `false`.

The `done` property is set to `false` because when the `generator` function is first called we can assume that the function has not yet completed its execution and has not reached the end of its code. The `generator` function can be resumed multiple times by calling the `.next()` method and it only terminates when it encounters a `return` statement or when it has executed all of its code and has reached the end of its function block. Most likely the `done` property is set to `false` to indicate that the `generator` function is still in progress and can be resumed by subsequent calls to the `.next()` (meaning we can call `.next()` again). Once the `generator` function has completed its execution and the end is reached, the `done` property will be set to `true`.

<br>

---

## Vocabulary

---

Asynchronous -

## Resources

---

[MDN - Function\*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

[MDN - Yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)

[MDN - .next()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)

[Code Wars - Generator Functions - Problem](https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript)

[How does Generator.next() processes its parameter?](https://stackoverflow.com/questions/37354461/how-does-generator-next-processes-its-parameter)
