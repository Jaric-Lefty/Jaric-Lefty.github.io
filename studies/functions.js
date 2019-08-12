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
*/

 //                                                       The syntax for a named function goes like this:
 
    
                function makeAStatement (statements) {
                             return statements;
                     }; // defining the function.
         
                     makeAStatement(); // invoking the function.
                     
                     
                //      For example:
                
                
                function add2Nums(num1, num2){
                    
                    return num1 + num2;
                    
    
                }
                
                add2Nums(5, 10); // Output: returns 15.
                
  //     We can assign a function to a varible using a Function expression:

        const add = function(numOne, numTwo){
            return numOne + numTwo;
        }
        add(2, 3) // returns 5.
        
/*   //    The fact that we can assign Function definites to a variable or constant is another example of Functions being first class Objects.
*
*
*
*
*     //  Some important things to keep in mind is Scope and Closures.

*
*   //    Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
*   //    Closures: In simplest terms, a closure can be understood as a function within a function. The actual closer part is the inner function.
*/   //  It has access to the outer functions varibles and parameters as well and access to global variables. 


        function makePerson(firstName, lastName) {
            
            var greeting = "Welcome to Closures "; 
            
            function makeAvi(){ // this inner function has access to the parent functions variables.
            // Both the var declared(greeting) and the parameters. 
                
                return greeting + firstName + " " + lastName;
                
            }
            
            return makeAvi(); // So when you return, the function inside is using the arguments you provided.
            
        }
        
        makePerson("Guy", "Smith"); // Output:  "Welcome to Closures Guy Smith."
        
        // Closures are a great part of javascript that lets us write more useful and powerful code.
        
        
        
    