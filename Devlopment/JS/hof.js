

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
//console.log(calculate(arr , diagnole));


// map.
//Syntax -> arr.map(function(ele)){
//      return {logic}
// })

// result arr // hof   // cb function.

// var areaofSquareArr = arr.map((num) => {
//      return num*num;
// })

// 1) Each element of arr is traversed , it is availaible 
//  in cd functional programing.
// 2) we performe some action on that element.
// 3) on writting return res is pushed inside an array

//console.log(areaofSquareArr);

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
