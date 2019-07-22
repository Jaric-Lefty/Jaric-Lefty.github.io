/*
* DATATYPES
* 
* Datatypes are inputs that hold data or a specific value in the code.
* Data types can be simple or complex. Simple datatypes(strings,boolean, numbers) are mutable which means that once they are created they cannot be changed and only hold one value at a time.
* Simple data types are copied by value, this means that:


* The value in a is COPIED into b
var a = 1;
var b = a; changing the value are b has no effect what is stored in a.

b = 2; 
console.log(a) // prints 1



* Complex datatypes(Arrays, Objects) are infinite in capacity and can be added to without hassle.:
    Number
* While complex values are passed to a function by Reference, this is saying that when a value is assigned or passed it is a reference of another variable

var a = {one: "foo"};

var b = a;

b.one = "bar";

console.log(a.one) = // prints "bar"

* 1. String - any text that is surrounded by quotes, usually words and letter EX: "Hello World."
* 2. Boolean - Boolean is a logical expression that equates the truthiness of values aka: whether something is true or false. Boolean results can only be true or false. EX: (3 > 5) will return a boolean value of false.
* 3. Array - Arrays are indexed lists that start at the 0 value. Arrays are constructed with two brackets and can be manipulated indefinitely. EX: var array = [1, 2, 3];
* 4. Object - Objects are also complex datatypes that can store information, similar to arrays, except objects store data using key: value pairs, when being manipulated objects can accept either bracket notation or dot notation. EX: var obj = {key: value}
* 5. Function - Functions are commands that execute specific conditions in a contained block of code. We can use functions to repeat processes with different variables.
                EX: function hi(){
                    console.log("Hello World");
                }
}
    
})
* 6. undefined - no-value, incept, uninitialized.
* 7. null - no-value, nullified by a programmer.
* 8. NaN - Not a number! (typeofNaN; // => "number")
* 9. Infinity and -Infinity - Infinity and -Infinity work in the same way as numbers and be used in operations. Infinity only has one value, which is infinity.

*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
















*/