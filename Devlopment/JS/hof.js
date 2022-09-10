

// Functional Programming.
// Better way
 var arr = [2,5,7,12]
let area = function(side){
     return side*side;
}
// let perimeter = function(side){
//      return side*4;
// }

// let diagnole = function(side){
//      return Math.sqrt(2)*side;
// }

// let calculate = function(arr , logic){
//      let res= [];
//      for(let i =0 ; i<arr.length ; i++){
//           res.push(logic(arr[i]));
//      }
//      return res;
// }

// console.log(calculate(arr , area));
// console.log(calculate(arr , perimeter));
// console.log(calculate(arr , diagnole));


// map.  Map is a function which takes a function as an argument and returns a function. its known as higher order function.
// Syntax -> arr.map(function(ele)){
//      return {logic}
// })

//result arr // hof   // cb function.

// var areaofSquareArr = arr.map((num) => {
//      return num*num;
// })

// 1) Each element of arr is traversed , it is availaible 
//  in cd functional programing.
// 2) we performe some action on that element.
// 3) on writting return res is pushed inside an array

//console.log(areaofSquareArr);

// var areaofSquareArr = arr.map(area);
// calculate(arr , logic);  // -> convert this to map function.
// arr.calculate(logic);
// console.log(areaofSquareArr);

// Implementation of Map function.
Array.prototype.calculate  = function(logic){
     let res= [];
     for(let i =0 ; i<this.length ;  i++){
          res.push(logic(this[i]));
     }
     return res;
}

let newarr = [2,5,7,12];                // this points to newarr
var ans = newarr.calculate(area);
console.log(ans);

newarr.push(45);
console.log(newarr);

// Implemetn oue own push function.
Array.prototype.mypush = function(ele){
     this[this.length] = ele;
     return this;
} 
newarr.mypush(123);
console.log(newarr);


// polyfills ->  adding a function to a class which is not present in your browser .


// Filters -> filter is a function which takes a function as an argument and returns a function. its known as higher order function.
let ar = [2,5,7,12];

function greaterThanFour(num){
     return num>4;
}
let gT4 = ar .filter(greaterThanFour);
console.log(gT4);


// Reduce -> reduce is a function which takes a function as an argument and returns a function. its known as higher order function.
function sumOfArray(acc , curr){
     console.log("before " , acc , curr);
     acc += curr;
     console.log("After " , acc , curr);
     return acc;
    
}
 var sum = ar.reduce(sumOfArray);
 console.log(sum);