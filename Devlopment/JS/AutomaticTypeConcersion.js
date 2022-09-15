
console.log(5+"1");  // 51
console.log("5"+1);  //51 
console.log(undefined+1);  // Nan
// console.log(Nan+1);
console.log(null+1);  // null->0
console.log(true-1)  // true->1

// substraction.
console.log("Subtraction");
console.log(5-"1");   // it try to convert if operation can be performed.
console.log("5"-1);
console.log(undefined-1);
console.log(undefined-1);
console.log(null-1);
console.log(false-10)  // -10  false->0

// in case of multiplication it tries to convert into number if performance can be performed.
console.log("Multiplication");
console.log(1*"3");
console.log("one"*"3");
console.log("one"*"three");
console.log("1"*"10");
console.log(undefined*1);
console.log(null*1);
console.log(false*2);

// arr.
console.log("Arrays and objects");
console.log([2]*2);   // its giving 4
console.log([1,2,4] *2);
console.log(([1,2,4]) *2);
console.log({a:2} *2);