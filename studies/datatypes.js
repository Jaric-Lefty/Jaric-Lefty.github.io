/*
* DATATYPES
* 
* Datatypes are inputs that hold data or a specific value in the code.


* Data types can be simple or complex. Simple datatypes(strings,boolean, numbers) are imutable or  which means 
  that once they are created they cannot be changed and only hold one value. A number will always be a number. Null has only exactly one value, null.
  Simple or primitive datatypes have a fixed size in memory. Variables can store primitive datatypes and know it is a primitive type in memory.
  
*/ 

  // Simple data types are copied by value, this means that:


 //The value in a is COPIED into b
            var a = 1;
            var b = a; // changing the value are b has no effect what is stored in a.

                b = 2; // so when you change the value in b it overrides what ever b was assigned too
                // var a is not effected.
                
            console.log(a) // prints 1


/*
* On the other hand. Complex datatypes(Arrays, Objects) are infinite in theory and can be added to without hassle. 
* While complex values are passed to a function by Reference, 
 this is saying that when assigning a variable to another variable that is currently assigned to a complex data type, 
 a reference to the same data type is used instead of creating a copy of the data type in memory. hence copy by reference.
 They both point to the same object.
*/

             var a = {one: "foo"};

                var b = a; // b is now a REFERENCE of what is in var a.

                b.one = "bar"; // So when you change the value of b, because its a reference of a, it changes both values.
                // because its still refering to one object.
                

                console.log(a.one); // prints "bar"




// 1. String - any text that is surrounded by quotes, usually words and letter EX: "Hello World."\

    var greeting = "Hello Grader";
 
// 2. Boolean - Boolean is a logical expression that equates the truthiness of values aka: whether something is true or false.
// Boolean results can only be true or false. EX: (3 > 5) will return a boolean value of false.

                var i = (3 > 5);

            console.log(i); // Output: false
// 3. Array - Arrays are indexed lists. Arrays are constructed with two brackets and can be manipulated indefinitely.
//              Arrays can store any primitive datatype including (strings, numbers, booleans, null, etc. )
                var array = [1, 2, 3];
                
// 4. Object - Objects are also complex datatypes that can store information, similar to arrays they can also hold primitive datatypes,
//              except objects store data using key: value pairs, when being manipulated objects can accept either bracket notation or dot notation. 

                 var obj = { key: "value"};
                 console.log(obj["key"]); 
                 // Output: value
                 
                console.log(obj.key);
                // Output: value.
                 
// 5. Function - Functions are commands that execute specific conditions in a contained block of code. We can use functions to repeat processes with different variables.
                    function hi(){
                    console.log("Hello World");
                }
                    // Output: Hello World
// 6. undefined - no-value, incept, uninitialized. If a variable is delcared but not assinged then its value is undefined. Nice rhyme.


                
                function undef () {}



                    undef(); // Output: undefined


                    let x;

                    alert(x); // shows "undefined"

// 7. null - no-value, nullified by a programmer.

                let age = null;

// 8. NaN - Not a number! (typeofNaN; // => "number")

            console.log('Appdividend' - 30)
            //Output: NaN


// 9. Infinity and -Infinity - Infinity and -Infinity work in the same way as numbers and be used in operations.
// Infinity only has one value, which is infinity.



            Infinity > 123192310293; // true
            -Infinity < -123192310293; // true
            1 / 0; // Infinity
            Math.pow(123123123, 9123192391023); // Infinity
            Number.MAX_VALUE * 2; // Infinity
            23 / Infinity; // 0
            -Infinity; // -Infinity
            -Infinity === Number.NEGATIVE_INFINITY; // true
            -0; // -0 There is a negative 0 in the language
            0 === -0; // true
            1 / -0; // -Infinity
            1 / 0 === 1 / -0; // false
            Infinity + Infinity; // Infinity














