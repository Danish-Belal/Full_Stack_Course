var arr = [1, 2, 3, 4];
var arr1 = new Array(4, 3, 2, 1);
// console.log(arr);
// console.log(arr1);
// console.log(arr[7]);

// arr[7] = 10;
// console.log(arr[7]);


// arr.splice(1,3,10,20,30);
// console.log(arr);

// arr.splice(1,3,10,20,30);  // splice take threeargument . 1 Starting index , no of count to del /replace , value to be insert.
// console.log(arr);

// function print(element){
//      console.log(element);
// }

// arr.forEach(print);

// arr.forEach((e)=>console.log(e))


// for(val in arr ){
//      console.log(arr[val]);
// }

// arr[10] = "Hello";
// console.log(arr);
// console.log(arr.length);



// function sayHello() {
//      console.log("Hello");
// }

// setTimeout(sayHello, 2000);

// var sec = 1;
// function sayHello2() {
//      console.log("After", sec);
//      sec++;
//      if (sec == 6) {
//           clearInterval(id)
//      }
// }

// var id = setInterval(sayHello2, 1000);  // will exectue function after every 1000 sec.


// count down interva

var time = 10;
function countDown(){
     console.log(time);
     time--;
     if(time == 0){
          clearInterval(id2);
     }
}

var id2 = setInterval(countDown , 1000);