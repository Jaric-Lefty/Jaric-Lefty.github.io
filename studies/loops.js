/*
*
*           (LOOPS)
*       Loops offer a quick and easy way to do something repeatedly.
*/       


// while - A while statement executes its commands as long as a specified condition evaluates to true. A while statement looks as follows:
        // While the condition is true javascript will keep running the loop.
        
        
            var n = 0;
            while (n < 3) {  //our condition. So while n is less than 3 it will keep adding to n. until it is not less then three then it will break the loop.
              n++; //statements
            }
            console.log(n); // output: 3.
// Be careful for infinite loops while using the while loop!
// While loops are for when you are not sure about the length of a value (array, string, number).


//for - A for loop repeats until a specified condition evaluates to false. 

           // for ([initialExpression]; [condition]; [incrementExpression]){
            //        statement
          //  }
            
          //  Say we wanted to loop over an array to find all over the values in it. We can make a for loop!
            
            var step = [1, 2, 3, 4, 5]
            for (let step = 0; step < 5; step++) {
              // Runs 5 times, with values of step 0 through 4.
              console.log('Walking east one step');
            }
            // we are basically saying to our computer to start at 0 and reiterate by 1 until the condition is not true anymore.
            
            
          //  If you wanted to loop backwards you can do that too!
            
            var step1 = [1, 2, 3, 4, 5]; 
 
            for (let i = step1.length; i > 0; i--){
              console.log(i); // Output 5,4,3,2,1
            }
            
            // Here we started at the end of our array and looped through it backwards.


//for-in - The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:
      //      for (variable in object){
      //                  statement
     //       }
     //       
            
            
       //     FOR EXAMPLE:
            
            var person = {firstName:"Guy", lastName:"Brush", age:25}; 

            
            for (var x in person) {
              console.log(person[x]);
              // Output: Guy, Brush, 25

              
}


// you can also acsess the keys too if you just console.log(x).

        for (var x in person) {
              console.log(x);
};
              // Output: firstName, lastName, age

       

// Loops are fun.
