

// Functional Programming.
// Better way
 var arr = [2,5,7,12]
let area = function(side){
     return side*side;
}
let perimeter = function(side){
     return side*4;
}

let diagnole = function(side){
     return Math.sqrt(2)*side;
}

let calculate = function(arr , logic){
     let res= [];
     for(let i =0 ; i<arr.length ; i++){
          res.push(logic(arr[i]));
     }
     return res;
}

console.log(calculate(arr , area));
console.log(calculate(arr , perimeter));
console.log(calculate(arr , diagnole));


// map.
// Syntax -> arr.map(function(ele)){
//      return {logic}
// })

//result arr // hof   // cb function.

var areaofSquareArr = arr.map((num) => {
     return num*num;
})

// 1) Each element of arr is traversed , it is availaible 
//  in cd functional programing.
// 2) we performe some action on that element.
// 3) on writting return res is pushed inside an array

console.log(areaofSquareArr);

var areaofSquareArr = arr.map(area);
console.log(areaofSquareArr);

// calculate (arr , logic); //-> convert this into map.
// arr.map(area).

// this is what we required.
// arr.calculate.

Array.prototype.calculate = function(logic){
     let res = [];
     for(let i =0  ;i<this.length ; i++){
          res.push(logic(this[i]));
     }
     return res;
}

let narr = [2,5,7,12];
var ans= narr.calculate(area);
console.log(ans);

// implementing own push method in arr.
Array.prototype.myPush = function(num){
     let len = this.length;
     this[len] = num;
     return this;
}
narr.myPush(45);
console.log(narr);

console.log(narr.length);
narr[10] = 5;
console.log(narr.length);
narr.myPush(23);
console.log(narr);


// Filter.
function greater(num){
     if(num > 4) return num;
}

let Ans = narr.filter(greater);
console.log(Ans);


var ar  = [10,12,23,45,67];

// Sum of arr;

function sumOfArr(acc , curr){
     acc += curr;
     return acc;
}

var sum = ar.reduce(sumOfArr);
console.log(sum);

// find greater.
function largestVal(acc , curr){
     if( curr > acc) {
          acc = curr;
     }
     return acc;
}

var ans = ar.reduce(largestVal );
//var ans = ar.reduce(largestVal  , 0 ); // 0 is initial value of accumulator .
console.log(ans);


const worldCapitals = [
     {
       country: "India",
       capital: "Delhi",
       population: "2cr",
     },
     {
       country: "America",
       capital: "Washington DC",
       population: "6cr",
     },
     {
       country: "France",
       capital: "Paris",
       population: "2cr",
     },
   
     {
       country: "England",
       capital: "London",
       population: "4cr",
     },
     {
       country: "Germany",
       capital: "Berlin",
       population: "2cr",
     },
   ];
   

// 01 Print country name and their capital // desired output -> India,Delhi.

// 02 Return the number of countries with a particular population .
//** Desired output -> { 2cr : 3 , 4cr ; 1 , 6cr:1}.

// 3 get country name with population less than 5cr.
// Desired output [India , France , England , Germeny]


// 01
for(cap in worldCapitals){
     console.log(worldCapitals[cap].country+ " -> "+ worldCapitals[cap].capital);
}




// 02.


// 03.
// var res = [];
// worldCapitals.forEach(element => {
//      if(element.population < "5cr"){
//           res.push(element.country);
//      }
// });
// console.log(res);

// function  getPopulationLessThan5cr(obj){
//      if(obj.population < "5cr"){
//           return true;
//      }
// }
// function getCountry(obj){
//      return obj.country;
// }
// var res= worldCapitals.filter(getPopulationLessThan5cr).map(getCountry);
// console.log(res);

// using reduce.

function getLessThan5(arr,obj){
     if(obj.population < "5cr"){
          arr.push(obj.country);
     }
     return arr; 
}
var res = worldCapitals.reduce( getLessThan5, [] );
console.log(res);