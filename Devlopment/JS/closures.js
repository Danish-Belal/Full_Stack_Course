
function outer(){
     var a = 10;
     function inner(){
          console.log(a);
     }
     return inner;
}

var x = outer();  // ineer come with its own scope and lexical scope(Parent scope).
console.log(x);  // thats why we can access a.
x();

// Another example of closure.
// function outer(){
//      var b = 10;
//      return function inner(){
//           console.log(b);
//      }
// } 
// var y = outer();
// console.log(y);
// y();

// annonymous function
// function outer(){
//      var b = 10;
//       function inner(){
//           console.log(b);
//      }
//      b = 1000;
//      return inner;
// } 
// var y = outer();
// console.log(y);
// y();   // 1000

function z(){
     var a  = 10;
     function b(){
          var b = 20;
          function c(){
               console.log(a,b);  // 
          }
          c() // c will return with b closure and its own scope.
     }
     b(); // b will return with a closure and its own scope.
}
z();