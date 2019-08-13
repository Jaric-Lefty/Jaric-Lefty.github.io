/*
*
*  (STRING MANIPULATION)
*
*  Strings string together characters. Strings can be treated like an Array of characters. Even with an index that you can reference too. 
*
*
*  With operators  - Comparison operators can be used on string values, but Strings also work with the concatenation operator (+). Concatenation takes two String values and returns another String that is the union of the two Operand strings.
*/
        var a = "Hello"
        var b = "World"
        console.log(a + " " +  b); // prints "Hello World"
        
        
 // With string methods -  Most things are objects in JavaScript. When you create a string, for example by using

        var string = 'This is my string';
        
        
// your variable becomes a string object instance, and as a result has a large number of properties and methods available to it.
// Some examples include:
     //  - Removing spaces from both ends of a string.
     
     var woah = "           Theres a lot of space            "
        woah.trim(); //Output: "Theres a lot of space"
        
        
        
        
    //     - Changing case:
         let data = "Data";
         
         data.toLowerCase(); //  returns "data"
         data.toUpperCase(); // returns "DATA"
         
         
    //     - Updating parts of a string. It takes two parameters — the string you want to replace, and the string you want to replace it with.
         
         data.replace("Data", "Hello World"); 
         console.log(data); // output: "Hello World"
         
         
    //  - Slice returns a substring of a string based on the start and end index arguments, but not including the end index itself!
            //slice(start, end)
            
        var text="excellent";
            text.slice(0,4); //returns "exce"
            text.slice(2,4); //returns "ce"
            
            
    // - Concat combines one or more strings into the existing one and returns the combined string.
    // The original string is not modified.
    
            //concat(v1, v2,..)
            var message="Jake";
            var final=message.concat(" has to"," code this.");
                console.log(final); // output:  "Jake has to code this."
                
    // - Split does exactly what it says it does. It splits the string into an array or substrings. This is a great way of sorting.
    
            const originalString = "How are you?";

                // Split string by whitespace character
            const splitString = originalString.split(" ");

            console.log(splitString);   // Output: [ 'How', 'are', 'you?' ]
            




