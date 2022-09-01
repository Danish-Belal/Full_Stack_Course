var obj = {
     name: "Danish",
     roll : "31"
};
console.log(obj['name']);


// Arrow function

var add = (a,b) =>{
     return a+b;
}
console.log(add(2,3));

var sub = (a,b) => a-b;
console.log(sub(2,3));

var pName = "M1";
var modal = 'note 8 pro';
var price = 15000;


// it will evaluate the value of the variable.
var obj = {
     pName ,
     modal ,
     price
}
console.log(obj);

var captain ={
     firstName :"Steve",
     lastName : "Rogers",
     friends : ["Tony","Bruce","Peter"],
     age : 122,
     address : {
          city : "New York",
          state : "Manhattan",
          country : "USA"
     },
     sayHi : function(){
          console.log(`Hello my name is ${captain.firstName}`);
     }

};

for(var key in captain){
     console.log(key);
     console.log(captain[key]);
}

var fun = captain['sayHi'];
fun();


// Clone an object
let clone  = {};
// for(let key in captain){
//      clone[key] = captain[key];
// }
// console.log(clone); // it will print in same order as captain object.

// object assign
Object.assign(clone,captain);
console.log(clone);

// let clone = {...captain};
// console.log(clone);

let v = 01;
function f(){
     return ++v;
}
console.log(f());

