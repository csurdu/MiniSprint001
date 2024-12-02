

// 1.1 ES6 Methods

// let, const -- do not exist in ES5

let x: number = 10;
// Here x is 10
{
  let x: number = 2;
  // Here x is 2
}
// Here x is 10

//---------------------------------------------------

let y: number = 10;
// Here y is 10
{
  const y: number = 2;
  // Here y is 2
}
// Here y is 10

//---------------------------------------------------

// arrow functions

// ES5
const z = function (x: number, y: number): number {
  return x * y;
};

// ES6
const t = (x: number, y: number): number => x * y; // shorter way of declaring functions without keyword

//---------------------------------------------------

// Create an Object
const person = {
  firstName: "Georgel",
  lastName: "Burlacel",
  age: 18,
  eyeColor: "green",
};

// Destructuring Assignment
let { firstName, age } = person;

//---------------------------------------------------

// 1.2 Difference between var, let, and const

// var -- works like a global variable meaning it can be used anywhere if you create it outside of a function
//    -- only available inside the function if created inside the same function

var a: number = 10; // a = 10 here
function f() {
  var b: number = 20;
  var c: number = 30;
  console.log(a, b); // a = 10 and b = 20
}
// console.log(c); // error because c is declared inside function f, can not be accessed outside of it

//---------------------------------------------------

// let -- better var because it is only accessible inside the block you define it in (inside {})

let a2: number = 10;
function f2() {
  if (true) {
    let b2: number = 9;
    console.log(b2); // b2 = 9
  }

  // console.log(b2); // error b2 is outside of the block it was declared which is inside the if statement above
}
f2();

console.log(a2); // a2 = 10

//---------------------------------------------------

// const -- the same as let but this one does not let you change the value of the variable and is mandatory to set a value when declaring a new variable of this type

const name1: string = "Cristi";
console.log("My name is:", name1); // name1 = Cristi

// name1 = "Gigel"; // error can not change const variable from Cristi to Gigel

//---------------------------------------------------

// 1.3 Spread Operator
// expands an iterable variable (string, array) with null values so that you can add more values to it
// copy all or part of an existing array or object into another

const numbersOne: number[] = [1, 2, 3];
const numbersTwo: number[] = [4, 5, 6];
const numbersCombined: number[] = [...numbersOne, ...numbersTwo];
console.log(numbersCombined); // [1, 2, 3, 4, 5, 6] -- combines arrays

//---------------------------------------------------

// 1.4 Objects -- iterate methods
// We use the person object created above at 1.1

// a -- for..in loop -> loop through the keys (not values) of the object one by one

for (let key in person) {
  console.log(`${key}: ${person[key as keyof typeof person]}`);
}

// b -- Object.entries().forEach() -> creates an array [key,value] and iterates through the pairs so it sees both the key and the value
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// c -- Deep Copy - Copies Recursively all levels of the object to make the copy independent meaning if you change smth in the copy it won t modify the original object

const deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.firstName = "Dorel";
console.log(person.firstName); //Georgel
console.log(deepCopy.firstName); //Dorel

// 1.5 Arrays

// a -> Accessor Methods

const arr1 = [1,2,3];
console.log(arr1.length); // length of the array
console.log(arr1.indexOf(2)); // element from second index in the array
console.log(arr1.includes(2)); // checks if array has the given value inside and returs true or false

//--------------------------------------------------------

// b -> Iteration Methods

arr1.forEach((num) => console.log(num)); // logs all of the elementes one by one
const squared = arr1.map((num) => num * num); // map is a stream function that takes as input an array and a function and applies the function on each element from the array and return the modified array
console.log(squared); 

//--------------------------------------------------------

// c -> Mutator Methods

arr1.push(4); // treats the array like a stack and puts 4 at the end 
console.log(arr1); // [1, 2, 3, 4]

const arr2 = [1, 2, 3, 4];
arr2.splice(1, 2, 5, 6); // first input is the index it starts removing,second is the number of elements it removes and last inputs are the variables that it puts in the places the removed elements were
console.log(arr2); // [1, 5, 6, 4]

// 1.6 Promises and Callbacks

//Promise -> handle asynchronous operations, providing better control over the flow of code
//it needs 2 functions one for the resolve of the promise and one for the reject of the promise

// function that returns a promise 
const calculateSum = (a: number, b: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number") {
      const sum = a + b;
      resolve(sum); // If inputs are valid numbers, resolve the Promise with the sum
    } else {
      reject("Invalid input! Both values must be numbers."); // Reject the Promise with an error message
    }
  });
};

// Using the Promise
calculateSum(5, 10)
  .then((result) => {
    console.log(`The sum is: ${result}`); // 15
  })
  .catch((error) => {
    console.error(error); // invalid as both values must be numbers.
  });

//-------------------------------------------------------------------

//Callback -> is a function that is transmited as argument and called later.

// the calculate function just makes the sum and the callback function does the other logic which here is just printing
//this is used when you want to do different things with the result
function calculate(a: number, b: number, callback: (result: number) => void): void {
  const sum = a + b; //calculate the sum
  callback(sum); // call the callback with the sum
}

// using the function with a callback
calculate(5, 10, (result: number) => {
  console.log(`The sum is: ${result}`); // 15
});

// 1.7 Async Await -> are a better way to treat promises as it can handle better if the promise is true or not

//Same sum function used above for the promise is called 
const getSum = async () => {
  try {
    const result = await calculateSum(5, 10); // waits for the Promise to resolve
    console.log(`The sum is: ${result}`); // 15
  } catch (error) {
    console.error(error); //  invalid as both values must be numbers.
  }
};

getSum();

//1.8 Closure -> a function that has acces to the parent scope even after the parent has closed
// easier it can remember and acces variables from an outer function even after that function has finished

//generic function that has a multiplier as an argument and returns a new function that multiplies given input with the provided multiplier
function createMultiplier(multiplier: number) {
  return (input: number) => input * multiplier; //returns anonime function, keeps scope of createMultiplier
}

const double = createMultiplier(2);
console.log(double(5)); // evaluetes input * multiplier => 5 * 2 = 10

//1.9 useState, useRef

//useState() - is a hook used to add a state to a functional component.It takes an initial value and returns an array with two elem
//           - the current state and a function to update the state 

// useState simualtion function 
function useState<T>(initialValue: T): [() => T, (newValue: T) => void] {
  let state = initialValue;

  const getState = () => state; // get the current state
  const setState = (newValue: T) => {
    state = newValue; // update the state
  };

  return [getState, setState];
}

const [count, setCount] = useState<number>(0);

console.log(count()); // 0
setCount(5);
console.log(count()); // 5
setCount(10);
console.log(count()); //10

//-------------------------------------------------

//useRef is a hook that allows you to store mutable value that persists between renders.It does not trigger re-render when value change

//  useRef simualation function
function useRef<T>(initialValue: T): { current: T } {
  return { current: initialValue };
}

const myRef = useRef<number>(42);

console.log(myRef.current); // 42
myRef.current = 100;
console.log(myRef.current); // 100

//Both save the persistance of the value
//useState updates while useRef does not affect the other parts of the app

