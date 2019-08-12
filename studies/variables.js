/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// Some things to remember
//  - var - declares a variable, this variable is static and cannot be changed once made.
 //   - let - Containers for reassignable values; they are NOT hoisted to their code block. They are blockscoped
 //    so let is only available for use within that codeblock. Let can be updated but no re-declared. but if the same varibale is defined in different scopes
  //   there won't be an error.
 //    for ex: 
     
     
        let greeting = "say Hi";
        let times = 4;

  if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);//"say Hello instead"
    }
  console.log(hello) // hello is not defined
  
 // Instead let must be declared and can only be used within the codeblock:
  
   let greeting1 = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting);//"say Hello instead"
    }
    console.log(greeting1);//"say Hi"
  
  
     
     
  //  - const - Containers whose values can never change; they are block scoped, and not hoisted to the top of their block scope. They cannot be updated or declared.
  //Every const declaration must be intialized at the time of declaration.
  
  //We can't do this:
  
  const hiya = {
        words : "Hello",
        number : "five"
    }//error :  Assignment to constant variable.
    
//But we can do this:

    hiya.message = "say Hello instead";
 
        // Hoisting - Hoisting was thought up as a general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript. However, the concept can be a little confusing at first.



/// // Conceptually, for example, a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.
