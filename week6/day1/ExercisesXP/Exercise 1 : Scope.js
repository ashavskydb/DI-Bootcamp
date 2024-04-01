// Exercsise 1

// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3; 
//     }
//     alert(`inside the funcOne function ${a}`); // a is 3 when this line is reached
// }
// // the value of 'a' inside 'funcOne' will be 3.


// // #1.1 - run in the console:
// funcOne() //                         // This will display "inside the funcOne function 3".
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
// //My opinion: Prediction: It will throw an error because you can't reassign a constant variable.

// //#2
// let a = 0;  // Variable a is declared with let, initial value is 0.
// function funcTwo() {
//     a = 5;
// }
//My opinion: variable a will be reassigned to 5.
//Therefore, the value of a globally will be 5 after funcTwo() is called.

// function funcThree() {
//     alert(`inside the funcThree function ${a}`); // The value of a will be 5.
// }
//My prediction for #2: The value of a will be 5 inside funcThree function because it's reassigned to 5 in funcTwo.

// #2.1 - run in the console:
// funcThree() // Output: inside the funcThree function 0
// funcTwo() //
// funcThree() //
// #2.2 What will happen if the variable is declared 
// with const instead of let ?

//My prediction: It will throw an error in funcTwo() because constants cannot be reassigned.

//#3
// function funcFour() {
//     window.a = "hello"; 
// }
//Assigns the value "hello" to the property a of the window object.

// function funcFive() {
//     alert(`inside the funcFive function ${a}`); // The value of variable 'a' will vary depending on whether it's globally defined. If 'a' is globally defined, it will output "hello".
// }


// #3.1 - run in the console:
// funcFour() // Sets the global variable a to "hello".
// funcFive() // This will display "inside the funcFive function hello".

//#4
// let a = 1; // Global variable a is declared with let, initial value is 1.
// function funcSix() {
//     let a = "test"; // Local variable a is declared with let, value is "test".
    // alert(`inside the funcSix function ${a}`); // Local variable a is accessed.
// }


// #4.1 - run in the console:
// funcSix() //My prediction: // This will display "inside the funcSix function test".
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
//My opinion: If the variable is declared with const instead of let inside funcSix, it will throw an error because a constant cannot be reassigned within the function scope.

//#5
// let a = 2; // Global variable a is declared with let, initial value is 2.
// if (true) {
//     let a = 5; // Local variable a is declared with let, value is 5 within the if block.
    // This will display "in the if block 5". // This will display "in the if block 5".
// }
// alert(`outside of the if block ${a}`);
// This will display "outside of the if block 2".

// #5.1 - run the code in the console 
// This will display: "in the if block 5" and "outside of the if block 2"


// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//My prediction: If the variable is declared with const instead of let inside the if block, it will throw an error because a constant cannot be reassigned within the block scope.


