/* 
*
*           (LOOPS)
*       Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.

You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction then Y steps in another; for example, the idea "Go five steps to the east" could be expressed this way as a loop:
*       


while - A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

            var n = 0;
            var x = 0;
            while (n < 3) {
              n++;
              x += n;
            }
// Be careful for infinite loops while using the while loop!


for - A for loop repeats until a specified condition evaluates to false. 

            for ([initialExpression]; [condition]; [incrementExpression]){
                    statement
            }
            
            Say we wanted to loop over an array to find all over the values in it. We can make a for loop!
            
            var step = [1, 2, 3, 4, 5]
            for (let step = 0; step < 5; step++) {
              // Runs 5 times, with values of step 0 through 4.
              console.log('Walking east one step');
            }
            // we are basically saying to our computer to start at 0 and reiterate by 1 until the condition is not true anymore.
            
            
            If you wanted to loop backwards you can do that too!
            
            var step = [1, 2, 3, 4, 5];
            for (let step = step.length - 1; step <= 0; step--){
              // Runs 6 times,with values of step 5 through 0.
              console.log('Walking east one step');
            }
            // Here we started at the end of our array and looped through it backwards.


for-in - The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:
            for (variable in object){
                        statement
            }
            
            
            
            FOR EXAMPLE:
            
            var arr = [3, 5, 7];
            arr.foo = 'hello';
            
            for (var i in arr) {
               console.log(i); // logs "0", "1", "2", "foo"
            }
            
            for (var i of arr) {
               console.log(i); // logs 3, 5, 7
            }




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