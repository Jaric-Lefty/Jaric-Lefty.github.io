/*
*  (OPERATORS)
*
* Essentially, operators operate on our data, they manipulate data in many ways. Operators are classed by what they do and how many operands they require.
* Operands are the values that operators act on. Unary(1), Binary(2), Ternary(3)
*
*
*/

// - Assignment operators - An assignment operator assigns a value to its left operand based on the value of its right operand. The basic assignment operator is equal (=). The other assignment operators are shorthand for another operation plus the assignment.
  // EX: (x = y)   (x += y)  ( x -= y)
   var i = 1; 

  // Arithmetic operators - The arithmetic operators (* / + -) combine two numeric values using multiplication, division, addition, and subtraction.
   var ex = (4 + 4);  // Output ex = 8;
   
// - Comparison operators - The comparison operators (=, <>, !=, ><, <, >, <=, and >=) compare values of the same type and produce a logical result (True or False).
   // EX: (1 < 2)     (5 >= 7)
    var truthy =  (3 > 1); // Output: true.
    
    
// Logical operators - Logical operators perform logical (boolean) operations.
 expr1 && expr2	// (Logical AND) Returns true if expr1 and expr2 are both true.
 expr1 || expr2	// (Logical OR) Returns true if either expr1 or expr2 is true, or both are true.
 expr1	// (Logical NOT) Returns true if expr1 is false; otherwise, returns false.
// Examples of expressions that can be converted to false are those that evaluate to null, 0, the empty string (??????), or undefined. Even though the && and || operators can be used with operands that are not Boolean values, they can still be considered Boolean operators since their return values can always be converted to Boolean values.

// Unary operators (!, typeOf, -) - As mentioned above unary operators take one value. 

var i = 1
console.log(i--);
// essentially saying (1 - 1);



 console.log(!true) // returns false. The bang (!) operator flips the truthiness of a value
 console.log(typeof 1) // returns "number". the typeof command evaluates the data placed in front of it and returns the datatype it is in a string.
 console.log(-i // returns 1-1) the subtract sign as well as the + sign either decreases or increases the variable by one.
 
 
 
 // String Operators can be kind of thought of as useful. When adding strings javaScript sort of treats them like numbers and adds them
 
  var a = "Hello";
  var b = "Darkness";
  
  var greeting = a + " " + b; //Output : "Hello Darkness"

// Ternary operator (a ? b : c) - The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.
 
 var year = 26;
 var beverage = (age >= 21) ? "Beer" : "Juice";
 console.log(beverage); // "Beer"