var student = {
     Name : "Danish",
     roll : 12,
     marks : 10
}


console.log(student.Name);
student.age = 21;

console.log(student);


// Bracktes.
console.log(student["Name"]);

function printPropertyr(obj , prop){
     console.log(obj[prop]);  // Here we can not use dot notation.
}

printPropertyr(student , "age");

// Deleting an property.
console.log(student);
console.log(delete student.age); 
console.log(student);

var student2 = student;
console.log(student2);
console.log(student===student2);
console.log(student==student2);

var student3 = new Object();
console.log(student3);
console.log(student===student3);

var keys = Object.keys(student2);
console.log(keys);
var keys2 = Object.getOwnPropertyNames(student2);
console.log(keys2);