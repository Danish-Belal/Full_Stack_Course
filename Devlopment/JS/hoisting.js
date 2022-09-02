

// // javaScript hoisting is a mechanism where variables
// //    and function declarations are moved to the top of their scope before code execution. 

// // javascript hoisting refers to the process whereby the interpreter appears to move the declaration
// //    of variables and functions to the top of the current scope, prior to execution of the code .
// //    This is not the case, however, as the interpreter moves the declarations, not the initializations.
// //   The effect of hoisting is that no matter where functions and variables are declared, they are moved
// // access of variables and functions before they are declared in the code is possible in JavaScript. --> hoisting.


// // js code
// console.log(a);  // will print undefined .
// //console.log(f);  // this will also give undefined.
// fun();   // this will give i am a function.  cuz in memorey it is already declared.
// function fun(){
//      console.log("I am a function");
// }
// var a = 10;
// console.log(a);  // will print 10.

// // Above code is same as below code.
// // All the variables and functions are hoisted to the top of the scope. this all happend due to execution context.
// // var a;
// // function fun(){
// //      console.log("I am a function");
// // }   
// // console.log(a); 
// // a = 10;
// // console.log(a);  

