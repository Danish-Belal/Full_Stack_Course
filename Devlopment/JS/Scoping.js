// greet();  // on window object this will print undefined.
// function greet(){
//      console.log('Hello form Danish');
// }
// greet();  // on window object this will print Hello from Danish.   do using execution context.

// Scoping of let and var.
// console.log(a);   // error , cannot access 'a' before initialization. cuz we use let. it was undefine in var
// let a = 10;
// console.log(b);
// var b = 100;   // undefiened
// //console.log(x);   // error , X is not defined.

// {
//      let l  = 10;
//      console.log(l);
// }
//console.log(l);   // error , l is not defined cause l is block scope.


// function fun(){
//      var v = 15;
//      console.log(v);
// }
// fun();
// console.log(v);   // error , v is not defined cause var is function scope.

// Scoping of variables.
// {
//      var v1 = 10;
//      let l1 = 20;
//      const c1 = 30;

//      console.log(v1);
//      console.log(l1);
//      console.log(c1);
// }
// console.log(v1);
//      console.log(l1);
//      console.log(c1);


// illegal shadowing.
// let a  =10;
// {
//      var a  =20;  // Cannot redeclare block-scoped variable 'a'. illeagal shadowing     

// }

var b = 10;
{
     let b = 20;   // var allow this. but let and const not allow this.
}