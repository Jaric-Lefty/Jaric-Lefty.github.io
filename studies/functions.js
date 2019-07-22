/*
*               (FUNCTIONS)
*
*
*   A function is essentially a piece of code that takes in arguments and executes a block of code.
    The parameters of a function call are the function's arguments. Arguments are passed to functions by value. If the function changes the value of an argument, this change is not reflected globally or in the calling function. However, object references are values, too, and they are special: if the function changes the referred object's properties, that change is visible outside the function.
*
*   Before we can start using our Function, we first must define our function. This is basically designing some code you want the function to execute when the function is called or invoked.
*   After we define our function we can call or invoke, or executing our function
*   The difference between our paramaters and arguments are that parameters are the placeholder while arguments are the values being PASSED IN to our function.
*   We can specifiy our inputs and outputs by adjusting the parameters and return command. If we make a function with one input it will only take one input and if we design our code to only return that input when the function is called then it will do just that.

*   The syntax for a named function goes like this:
        function name([param[, param[, ... param]]]) {
         statements
         } // defining the function.
         
         name(); // invoking the function.
*
*       We can assign a function to a varible using a Function expression:

        const add = function(numOne, numTwo){
            return numOne + numTwo;
        }
*       The fact that we can assign Function definites to a variable or constant is another example of Functions being first class Objects.
*
*
*
*
*       Some importatn things to keep in mind is Scope and Closures.
*
*       Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
*       Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)
*/