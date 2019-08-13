/*
*       (CONTROL FLOW)
*
*   The control flow is the order in which the computer executes statements in a script.

*   Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops. 
*
*
*       For example, imagine a script used to validate user data from a webpage form. The script submits validated data, but if the user, say, 
        leaves a required field empty, the script prompts them to fill it in. To do this, the script uses a conditional structure or if...else,
        so that different code executes depending on whether the form is complete or not:
*/



// If - If statements start our conditional block of code, it takes a boolean condition that if true with run the specified code in the codeblock

function testNum(a) {
  if (a > 0) {
    return "positive";
  } else {
    return "NOT positive";
  }
}

console.log(testNum(-5));

// expected output: "NOT positive"

// Else-if - Else if statements are like If statements, except that this is testing another condition of the code, if the IF statement is false, the program will move on to the Else If statement to see if thats true.
//          You can chain together how ever many else if statements you want, as they all can test different conditions


var a = 10, b = 20;
if (a > b) {
    console.log('a is greater than b');
} else if (a < b) {
    console.log('a is less than b');
} else {
    console.log('a is equal to b');
}
// output : "a is less than b"

// Else - If you ran through all your conditional statements and none of them are true, the program will execute the else statement. The else is the catch-all for your conditional, it will run when none of the other conditions are met.

// Switch - The switch statement evalutes an input expression, matching the expression's value to a case clause, and executes statements associated with that case.
//           If no matching case clause is found, the program looks for the optional default clause, and if found, transfers control to that clause, executing the associated statements. If no default clause is found, the program continues execution at the statement following the end of switch. By convention, the default clause is the last clause, but it does not need to be so.

//The optional break statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If break is omitted, the program continues execution at the next statement in the switch statement.
//Using a switch statement vs. using an if statement is entirely situational. But when you use an if statement you are checking a series of boolean values. If you wanted to check if something is strictly equal to this and anything else then you can use a switch statement.

// Some Examples


var i=2;

switch (i)
{
    case 1:
        console.log("value of i = 1");
        break;

    case 2:
        console.log("value of i = 2");
        break;

    case 3:
        console.log("value of i = 3");
        break;

    default:
        console.log("value of i is not equal to any given values");
} ;    
// Output: "value of i = 2"


// Another example.


var ps4Game = 'Spider-Man 2018 video game';

switch (ps4Game) {
case 'FIFA 19':
    console.log('FIFA 19 is good playstation game');
    break;

case 'Assassin\'s Creed Odyssey':
    console.log('Assassin\'s Creed Odyssey is better game');
    break;

case 'Spider-Man 2018 video game':
    console.log('Spider-Man 2018 video game is best Playstation Video Game');
    break;

default:
    console.log('Sorry, we are out of ' + ps4Game + '.');
}
// Output: 'Spider-Man 2018 video game is best Playstation Video Game'