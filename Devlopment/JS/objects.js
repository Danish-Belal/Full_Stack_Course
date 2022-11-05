// var obj = {
//      name: "Danish",
//      roll : "31"
// };
// console.log(obj['name']);


// // Arrow function

// var add = (a,b) =>{
//      return a+b;
// }
// console.log(add(2,3));

// var sub = (a,b) => a-b;
// console.log(sub(2,3));

// var pName = "M1";
// var modal = 'note 8 pro';
// var price = 15000;


// // it will evaluate the value of the variable.
// var obj = {
//      pName ,
//      modal ,
//      price
// }
// console.log(obj);

// var captain ={
//      firstName :"Steve",
//      lastName : "Rogers",
//      friends : ["Tony","Bruce","Peter"],
//      age : 122,
//      address : {
//           city : "New York",
//           state : "Manhattan",
//           country : "USA"
//      },
//      sayHi : function(){
//           console.log(`Hello my name is ${captain.firstName}`);
//      }

// };

// for(var key in captain){
//      console.log(key);
//      console.log(captain[key]);
// }

// var fun = captain['sayHi'];
// fun();


// Clone an object
// let clone  = {};
// for(let key in captain){
//      clone[key] = captain[key];
// }
// console.log(clone); // it will print in same order as captain object.

// object assign , but for nested object it will only copy the reference.
// Object.assign(clone,captain);
// console.log(clone);

// let clone = {...captain};
// console.log(clone);

// let v = 01;
// function f(){
//      return ++v;
// }
// console.log(f());


// q1 -> count the frequency of each element in an array.
//   let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];

//  function countFreq(ele){
//      let obj = {};
//      for(let i = 0 ; i < ele.length ; i++){
//          if(obj[ele[i]]) obj[ele[i]]++;
//          else obj[ele[i]] = 1;
//      }
//      console.log(obj);
//  }

//  let ans = countFreq(arr);
//  console.log(ans);

//  function countfre(acc , curr){
//      if(acc[curr]) acc[curr]++;
//      else acc[curr] = 1;
//      return acc;
//  }

//  let ans2 = arr.reduce(countfre , {});
//  console.log(ans2);


let user = {
     name: 10,
     age: 21,
     residence: {
          street: 21 / 1,
          area: "Titagarh",
          state: "WB"
     },
     education: "B.Tech"
}


const deepClone = (obj) =>{
     let cloneObj = Object.assign({} , obj);
     Object.keys(cloneObj).forEach((key) => {
          let type = typeof cloneObj[key];
          if(type == 'object'){
               cloneObj[key] = deepClone(obj[key]);
          }else{
               cloneObj[key] = obj[key];
          }
     })
     return cloneObj;
}

let newObj = deepClone(user);
console.log(user);
user.age = 203;
console.log(user);
console.log(newObj);