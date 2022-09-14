// Spread Operator.
// it is used to spread arr element or object properties.

let nums = [1,2,3,4];
let newNums = [...nums];
console.log(newNums);


let obj = {
     name : "Danish",
     age : 21,
     residence : {   // spread operator only copy address , shadow copy
          state : "WB",
          city : "Kol",
          pin : 700119
     }
}

let newObj  = {...obj};
console.log(newObj);
console.log(obj);
newObj.residence.city = "Delhi";  // this will change for both
console.log(newObj);
console.log(obj);


let newobj2 = {...obj , weight : 70} // can add  more val.
console.log(newobj2);


// rest operator.
// it is used to merge all of the function argument into an array.

function foo(...arr){
     console.log(arr);
}

foo("Hello" , "My" , "Name" , 19,09,2001);
