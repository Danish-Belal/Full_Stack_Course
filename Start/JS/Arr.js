var arr = [1,2,3,4];
var arr1 = new Array(4,3,2,1);
// console.log(arr);
// console.log(arr1);
// console.log(arr[7]);

// arr[7] = 10;
// console.log(arr[7]);


// arr.splice(1,3,10,20,30);
// console.log(arr);

arr.splice(1,3,10,20,30);  // splice take threeargument . 1 Starting index , no of count to del /replace , value to be insert.
console.log(arr);

function print(element){
     console.log(element);
}

arr.forEach(print);

arr.forEach((e)=>console.log(e))

for(val in arr ){
     console.log(val);
}