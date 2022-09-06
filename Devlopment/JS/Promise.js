// this will give state pending and value undefined
// let promise = new Promise( function(reject , reslove){});
// console.log(promise);

// This will shaw result fullfilled and value : promise2 is resloved after 3 sec.
let promise2 = new Promise(function(resolve , reject){
     setTimeout( function(){
          console.log("Promise 2 is resolved");
     }, 3000)
});
console.log(promise2);


// this will show result rejected , valaue rejected.
// let promise3 = new Promise(function(resolve , reject){
//      setTimeout(() => reject(console.log("Woops")), 1000);
// });
// console.log(promise3);

// Consuming promise

 let promise = new Promise(function(resolve , reject){
     setTimeout(() => resolve(console.log("Promise is resolve")), 1000);
}).then(function(){
     console.log("Promise is resolved , this is then function");
}, function(){ 
     console.log("Promise is rejected , this is then function");
});

promise.then(
     result => console.log(result),  // first argument is for resolve
     error => console.log(error)        // second argument is for reject
);


// fetch
// this is not working here , it will work in browser.
console.log("Fetch API");
setTimeout(()=> {
     console.log("Timer is done");
} , 5000);
// promise
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(function(){
     console.log("YOLO");
});
console.log("Finsihsed");