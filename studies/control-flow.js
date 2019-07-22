/*
*       (CONTROL FLOW)
*
*   The control flow is the order in which the computer executes statements in a script.

*   Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops. 
*
*
*       For example, imagine a script used to validate user data from a webpage form. The script submits validated data, but if the user, say, leaves a required field empty, the script prompts them to fill it in. To do this, the script uses a conditional structure or if...else, so that different code executes depending on whether the form is complete or not:

if (field==empty) {
    promptUser();
} else {
    submitForm();
}

*
* If - If statements start our conditional block of code, it takes a boolean condition that if true with run the specified code in the codeblock
* Else-if - Else if statements are like If statements, except that this is testing another condition of the code, if the IF statement is false, the program will move on to the Else If statement to see if thats true.
*           You can chain together how ever many else if statements you want, as they all can test different conditions
* Else - If you ran through all your conditional statements and none of them are true, the program will execute the else statement. The else is the catch-all for your conditional, it will run when none of the other conditions are met.

* Switch - The switch statement evalutes an input expression, matching the expression's value to a case clause, and executes statements associated with that case.
*           If no matching case clause is found, the program looks for the optional default clause, and if found, transfers control to that clause, executing the associated statements. If no default clause is found, the program continues execution at the statement following the end of switch. By convention, the default clause is the last clause, but it does not need to be so.

The optional break statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If break is omitted, the program continues execution at the next statement in the switch statement.

Examples  
        switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
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





*/