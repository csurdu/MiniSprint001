// 1.1 ES6 Methods
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
// let, const -- do not exist in ES5
var x = 10;
// Here x is 10
{
    var x_1 = 2;
    // Here x is 2
}
// Here x is 10
//---------------------------------------------------
var y = 10;
// Here y is 10
{
    var y_1 = 2;
    // Here y is 2
}
// Here y is 10
//---------------------------------------------------
// arrow functions
// ES5
var z = function (x, y) {
    return x * y;
};
// ES6
var t = function (x, y) { return x * y; }; // shorter way of declaring functions without keyword
//---------------------------------------------------
// Create an Object
var person = {
    firstName: "Georgel",
    lastName: "Burlacel",
    age: 18,
    eyeColor: "green",
};
// Destructuring Assignment
var firstName = person.firstName, age = person.age;
//---------------------------------------------------
// 1.2 Difference between var, let, and const
// var -- works like a global variable meaning it can be used anywhere if you create it outside of a function
//    -- only available inside the function if created inside the same function
var a = 10; // a = 10 here
function f() {
    var b = 20;
    var c = 30;
    console.log(a, b); // a = 10 and b = 20
}
// console.log(c); // error because c is declared inside function f, can not be accessed outside of it
//---------------------------------------------------
// let -- better var because it is only accessible inside the block you define it in (inside {})
var a2 = 10;
function f2() {
    if (true) {
        var b2 = 9;
        console.log(b2); // b2 = 9
    }
    // console.log(b2); // error b2 is outside of the block it was declared which is inside the if statement above
}
f2();
console.log(a2); // a2 = 10
//---------------------------------------------------
// const -- the same as let but this one does not let you change the value of the variable and is mandatory to set a value when declaring a new variable of this type
var name1 = "Cristi";
console.log("My name is:", name1); // name1 = Cristi
// name1 = "Gigel"; // error can not change const variable from Cristi to Gigel
//---------------------------------------------------
// 1.3 Spread Operator
// expands an iterable variable (string, array) with null values so that you can add more values to it
// copy all or part of an existing array or object into another
var numbersOne = [1, 2, 3];
var numbersTwo = [4, 5, 6];
var numbersCombined = __spreadArray(__spreadArray([], numbersOne, true), numbersTwo, true);
console.log(numbersCombined); // [1, 2, 3, 4, 5, 6] -- combines arrays
//---------------------------------------------------
// 1.4 Objects -- iterate methods
// We use the person object created above at 1.1
// a -- for..in loop -> loop through the keys (not values) of the object one by one
for (var key in person) {
    console.log("".concat(key, ": ").concat(person[key]));
}
// b -- Object.entries().forEach() -> creates an array [key,value] and iterates through the pairs so it sees both the key and the value
Object.entries(person).forEach(function (_a) {
    var key = _a[0], value = _a[1];
    console.log("".concat(key, ": ").concat(value));
});
// c -- Deep Copy - Copies Recursively all levels of the object to make the copy independent meaning if you change smth in the copy it won t modify the original object
var deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.firstName = "Dorel";
console.log(person.firstName); //Georgel
console.log(deepCopy.firstName); //Dorel
// 1.5 Arrays
// a -> Accessor Methods
var arr1 = [1, 2, 3];
console.log(arr1.length); // length of the array
console.log(arr1.indexOf(2)); // element from second index in the array
console.log(arr1.includes(2)); // checks if array has the given value inside and returs true or false
//--------------------------------------------------------
// b -> Iteration Methods
arr1.forEach(function (num) { return console.log(num); }); // logs all of the elementes one by one
var squared = arr1.map(function (num) { return num * num; }); // map is a stream function that takes as input an array and a function and applies the function on each element from the array and return the modified array
console.log(squared);
//--------------------------------------------------------
// c -> Mutator Methods
arr1.push(4); // treats the array like a stack and puts 4 at the end 
console.log(arr1); // [1, 2, 3, 4]
var arr2 = [1, 2, 3, 4];
arr2.splice(1, 2, 5, 6); // first input is the index it starts removing,second is the number of elements it removes and last inputs are the variables that it puts in the places the removed elements were
console.log(arr2); // [1, 5, 6, 4]
// 1.6 Promises and Callbacks
//Promise -> handle asynchronous operations, providing better control over the flow of code
//it needs 2 functions one for the resolve of the promise and one for the reject of the promise
// function that returns a promise 
var calculateSum = function (a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === "number" && typeof b === "number") {
            var sum = a + b;
            resolve(sum); // If inputs are valid numbers, resolve the Promise with the sum
        }
        else {
            reject("Invalid input! Both values must be numbers."); // Reject the Promise with an error message
        }
    });
};
// Using the Promise
calculateSum(5, 10)
    .then(function (result) {
    console.log("The sum is: ".concat(result)); // 15
})
    .catch(function (error) {
    console.error(error); // invalid as both values must be numbers.
});
//-------------------------------------------------------------------
//Callback -> is a function that is transmited as argument and called later.
// the calculate function just makes the sum and the callback function does the other logic which here is just printing
//this is used when you want to do different things with the result
function calculate(a, b, callback) {
    var sum = a + b; //calculate the sum
    callback(sum); // call the callback with the sum
}
// using the function with a callback
calculate(5, 10, function (result) {
    console.log("The sum is: ".concat(result)); // 15
});
// 1.7 Async Await -> are a better way to treat promises as it can handle better if the promise is true or not
//Same sum function used above for the promise is called 
var getSum = function () { return __awaiter(_this, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, calculateSum(5, 10)];
            case 1:
                result = _a.sent();
                console.log("The sum is: ".concat(result)); // 15
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1); //  invalid as both values must be numbers.
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
getSum();
//1.8 Closure -> a function that has acces to the parent scope even after the parent has closed
// easier it can remember and acces variables from an outer function even after that function has finished
//generic function that has a multiplier as an argument and returns a new function that multiplies given input with the provided multiplier
function createMultiplier(multiplier) {
    return function (input) { return input * multiplier; }; //returns anonime function, keeps scope of createMultiplier
}
var double = createMultiplier(2);
console.log(double(5)); // evaluetes input * multiplier => 5 * 2 = 10
//1.9 useState, useRef
//useState() - is a hook used to add a state to a functional component.It takes an initial value and returns an array with two elem
//           - the current state and a function to update the state 
// useState simualtion function 
function useState(initialValue) {
    var state = initialValue;
    var getState = function () { return state; }; // get the current state
    var setState = function (newValue) {
        state = newValue; // update the state
    };
    return [getState, setState];
}
var _a = useState(0), count = _a[0], setCount = _a[1];
console.log(count()); // 0
setCount(5);
console.log(count()); // 5
setCount(10);
console.log(count()); //10
//-------------------------------------------------
//useRef is a hook that allows you to store mutable value that persists between renders.It does not trigger re-render when value change
//  useRef simualation function
function useRef(initialValue) {
    return { current: initialValue };
}
var myRef = useRef(42);
console.log(myRef.current); // 42
myRef.current = 100;
console.log(myRef.current); // 100
//Both save the persistance of the value
//useState updates while useRef does not affect the other parts of the app
