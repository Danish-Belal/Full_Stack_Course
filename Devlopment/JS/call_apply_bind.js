// Call method.
// if there is some function and we want to attach this with every object then we use call method.

// syntx :-> function_name.call(obj_to_which_this_will_point). 


let crickter1 = {
     fname : "Kapil",
     lname : "Dev",
     welcomwfun  : function(){
          console.log(`welcome ${this.fname} -> ${this.lname}`);
     }
}

// // function borrow.
// // Calls method of an object , subsitutuing another object for current object . this shoud point current obj.
// crickter1.welcomwfun.call(crickter2);   // if there is a function in an obj and we want to access that function for another object.


let crickter2 = {
     fname : "Ravi",
     lname : "Sastri"
}

let welcome = function(){
     console.log(`Hello ${this.fname}  ${this.lname}`);
}
welcome.call(crickter1);   
// welcome.call(crickter2);



let welcome2 = function(email , M_no , location){
     console.log(`Hello ${this.fname}  ${this.lname},
                    Thanks for signing! your email is ${email}
                    Your Mno is ${M_no},
                    Your location is ${location}`);
}

 welcome2.call(crickter1 , "danish@gmail.com" , 9891600851 , "India");  // we can add addition info if function needed.

// // apply method.
 welcome2.apply(crickter2 , ["dani@xyz" , 989988 , "india"]);  // apply take array as  parameter.


// Binnd Method.
// bind metod is used to attach this with given obj , its return a function and fun can be calle anywhere.

let car = {
     name : "Thar",
     brand : "Mahindra"
}

function carDescription(date , INR){
     console.log(`I bought new ${this.brand} ${this.name},
     on ${date}. it COst me around  INR ${INR}`);
}

// carDescription(car);
let bindfn = carDescription.bind(car);
bindfn();


// Implementing our own bind method.
 Function.prototype.myBind = function(args){
     let funBind = this;
     return function(){
          funBind.call(args);
     }
 }
 // generic , if more arguments
 Function.prototype.myBind = function(...args){
     let funBind = this;
     let prams = args.slice(1);
     return function(){
          funBind.apply(args[0] , prams);
     }
 }

 var myBindFun = carDescription.myBind(car , "22 july" , "20lac");
myBindFun();