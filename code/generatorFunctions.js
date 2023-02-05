function* generatorFunction() {
  console.log("The generator function has been called.");
  yield 1;
  //console.log("The generator function has finished.");
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());
console.log(generatorObject.next());
// console.log(genObject.next());
// console.log(genObject.next());
// console.log(genObject.next());
