// // The following variables are defined in the global scope
// var num1 = 20,
//      num2 = 3,
//      name = 'Chamakh';

// // This function is defined in the global scope
// function multiply() {
//      return num1 * num2;
// }

// var mul = multiply(); // Returns 60
// console.log(mul);

// // A nested function example
// function getScore() {
//      // var num1 = 2,
//      //      num2 = 3;

//      function add() {
//           return name + ' scored ' + (num1 + num2);
//      }

//      return add();
// }

// var v3 = getScore(); // Returns "Chamakh scored 5"
// console.log(v3);


// closure or nesting function.
// function addSquares(a, b) {
//      function square(x) {
//        return x * x;
//        var innerVar = 10;
//      }
//    //  console.log(innerVar);  // can not access inner function variable.
//      return square(a) + square(b);

//    }
//    a = addSquares(2, 3); // returns 13
//    b = addSquares(3, 4); // returns 25
//    c = addSquares(4, 5); // returns 41
//    console.log(a);
//    console.log(b);
//    console.log(c);

// //    var d = square(5);  // can not directly access inner function cuz it is closure.
// //    console.log(d);


// function outside(x) {
//      function inside(y) {
//        return x + y;
//      }
//      return inside;   // returning the whole inside function.
//    }
// var  fn_inside = outside(3);    // now in fn_inside we have function.
// console.log(fn_inside);

// var innerval = fn_inside(2);  
// console.log(innerval);        // This will return 5 , 
// var result2 = outside(5)(3);
// console.log(result2);    // we can aslo pass both the paramerters




// // Multi Nesting Functions.
// function A(x) {
//   function B(y) {
//     function C(z) {
//       console.log(x + y + z);
//     }
//     C(3);
//   }
//   B(2);
// }
// val = A(5); // logs 6 (1 + 2 + 3)


// // Name Conflict.
// function outside() {
//   var x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside()(10)); // returns 20 instead of 10


// // closore . function inside function.
// var createPet = function (name) {
//   var sex;

//   return {
//     setName: function (newName) {
//       name = newName;
//     },

//     getName: function () {
//       return name;
//     },

//     getSex: function () {
//       return sex;
//     },

//     setSex: function (newSex) {
//       if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
//         newSex.toLowerCase() === 'female')) {
//         sex = newSex;
//       }
//     }
//   }
// }

// var pet = createPet('Vivie');
// pet.getName();                  // Vivie

// pet.setName('Oliver');
// pet.setSex('male');
// console.log(pet.getSex());                   // male
// pet.getName();                  // Oliver




// // Dates and Objects
// const Xmas95 = new Date('December 25, 1995');
// console.log(Xmas95);


// function outside(){
//   console.log("Outer");
//   function inside(){
//     console.log("Inside");
//   }
//   inside();
// }

// outside();


f(10);
function f(n){
  console.log(n);
}
f(2);



var v = function fact(n){
  console.log(n)
}
v(4);


