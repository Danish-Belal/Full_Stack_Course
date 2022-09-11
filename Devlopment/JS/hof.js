

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


 // FUnction to get largest number from an array.
   function largestElement(acc , curr){
     if(acc > curr) return acc;
     return curr;
  }


 let larg = ar.reduce(largestElement , -Infinity); // -Infinity is the initial value of acc. so that curr starts form 0th index.
     console.log(larg);

     
     const worldCapitals = [
          {country: "India",capital: "Delhi",population: "2cr",},
          {country: "America",capital: "Washington DC",population: "6cr",},
          {country: "France",capital: "Paris",population: "2cr",},
          {country: "England",capital: "London",population: "4cr",},
          {country: "Germany",capital: "Berlin",population: "2cr",},
     ];     

    

     // 1) Get all the countries and capital from worldCapitals in an array.
     let contCapi = worldCapitals.map((obj) => {
          return obj.country + " " + obj.capital;
     });
     console.log(contCapi);

     // 2) return the number of country.
     function getPopulation(obj , curr){
         if(obj[curr.population]) obj[curr.population]++;
         else obj[curr.population] = 1;
         return obj;
     }
     let getCountryPop = worldCapitals.reduce(getPopulation , {});
     console.log(getCountryPop);
    
     // 3) return the countries which have population greater than 5cr.
     
//      let C = worldCapitals.filter((obj) => {
//           return obj.population < "5r";
//      });

//     let ans2=  C.map((obj)=>{
//           return obj.country;
//      });
//      console.log(ans2);

     // Antoher way.
     // function getPopulationlessThan5(obj){
     //      return obj.population < "5cr";
     // }


     // function getCountry(obj){
     //      return obj.country;
     // }


     // let res = worldCapitals.filter(getPopulationlessThan5).map(getCountry);
     // console.log(res);

     // using reduce.
     function lessThan5(acc , curr){
          if(curr.population <= "5cr"){
               acc.push(curr.country);
          }
          return acc;
     }
     let res = worldCapitals.reduce(lessThan5 , []);
     console.log(res); 
