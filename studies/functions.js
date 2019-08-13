/*
*               (FUNCTIONS)
*
*
*   A function is essentially a piece of code that takes in arguments and executes a block of code.
    The parameters of a function call are the function's arguments. Arguments are passed to functions by value.
    If the function changes the value of an argument, this change is not reflected globally or in the calling function.
    However, object references are values, too, and they are special: if the function changes the referred object's properties, that change is visible outside the function.
*
*   Before we can start using our Function, we first must define our function. This is basically designing some code you want the function to execute when the
    function is called or invoked.
*   After we define our function we can call or invoke, or executing our function
*   The difference between our paramaters and arguments are that parameters are the placeholder while arguments are the values being PASSED IN to our function.
*   We can specifiy our inputs and outputs by adjusting the parameters and return command. If we make a function with one input it will only take one input and if
    we design our code to only return that input when the function is called then it will do just that.
*/

 //                                                       The syntax for a named function goes like this:
                
                
    
                function makeAStatement (statements) {
                             return statements;
                     }; // defining the function.
         
                     makeAStatement(); // invoking the function.
                     makeAStatement("Hello World!") //Output: "Hello World!"
                     
                     
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
        
   //    The fact that we can assign Function definites to a variable or constant is another example of Functions being first class Objects.
   
   
   /*
   Also, in JS, like in most every language, you're free to simply ignore the return value of a function. A function does not always need parameters/arguments to work.
    a JS function needn't return anything as far as your code goes. But as far as the JS engines are concerned: a function always returns something, be it explicitly via a return statement, or implicitly.
   If a function returns implicitly, its return value will always be undefined.

   */
   
                        function weDontCare() {
                            console.log('this function will return undefined, but we don\'t care');
                        }
                        weDontCare();//this expression evaluates to: (undefined)
                        //but console.logs "this function will return undefined, but we don\'t care"

// Heres another example with a function taking no parameters/arguments and no return statement but still giving us a result.

                function addTwoFives(){
        
                     console.log(5 + 5);
                           }
        
                    addTwoFives(); // Output 10; but just console.logs it not returns it.
        
           

 //JavaScript does not throw an error if the number of arguments passed during a function invocation are different than the number of parameters listed during function definition. 
// This should make it clear that parameters and arguments should be treated as two different entities.
 
 
 
 // Basic function with three parameters that logs the sum of all the parameters
                function argCheck(parameter1, parameter2, parameter3){
                  console.log(parameter1 + parameter2 + parameter3);
                }
                
                // Function with extra arguments
                argCheck(1,2,3,4);
                // Logs 6 (1 + 2 + 3, ignores 4)
                
                // Function with missing arguments
                argCheck(1,2);
                // Logs NaN because by default if a corresponding argument is missing, it is set to undefined. 
                // parameter3 is assigned undefined and so 1+2+undefined = NaN
                
                // Note that, no error is thrown.
 
 
 
 
 
 
 
 
 
     //  Some important things to keep in mind is Scope and Closures.

  //    Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

  //    Closures: In simplest terms, a closure can be understood as a function within a function. The actual closure part is the inner function.
 //  It has access to the outer functions varibles and parameters as well and access to global variables. 


        function makePerson(firstName, lastName) {
            
            var greeting = "Welcome to Closures "; 
            
            function makeAvi(){ // this inner function has access to the parent functions variables.
            // Both the var declared(greeting) and the parameters. 
                
                return greeting + firstName + " " + lastName;
                
            }
            
            return makeAvi(); // So when you return, the function inside is using the arguments you provided.
            
        }
        
        makePerson("Guy", "Smith"); // Output:  "Welcome to Closures Guy Smith."
        
        
         function exampleAdd(x){
            
            return function(y){
                return x + y;
            };
        }
        
        let res = exampleAdd(2); // this is refering to the x variable.

        res(5); //So when you call this variable as a function you are providing the y variable. This is the closure.
        // Output: 7. 
        
        
        // Closures are a great part of javascript that lets us write more useful and powerful code.
        
    