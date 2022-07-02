var tommy = {
     Name : "Tommy",
     breed : "Lebardor",
     dob : "5 May 2001",
     father : {
          Name : "Jommy",
          breed : "Lebardor",
          dob : "3 aug 1998"
     }
}

console.log(tommy);
console.log(tommy.Name);
console.log(tommy["Name"]);
console.log(tommy.father);
console.log(tommy["father"].Name);
console.log(tommy["father"]["dob"]);

// Objects were passed by referenced.

// var ruby = tommy;
// console.log(ruby);
// ruby.Name = "Ruby";
// console.log(ruby.Name);
// console.log(tommy.Name);   // tommy name has also changed.


// Enumeration.
// for in loop , will work like iterator

for(key in tommy){
     console.log(key + " : " + tommy[key]);
     //console.log(tommy[key]);   // notice here braces have not used cause it it iterator not key.
}


console.log(typeof(tommy));
console.log(typeof(tommy["Name"]));



// ProtoType  --> Kind of inheritance.

var ruby = {};  // created an empty object.
// console.log(ruby);
ruby.__proto__ = tommy;
console.log(ruby.Name);
ruby.Name = "Ruby";
console.log(ruby.Name);
console.log(tommy.Name);  // Tommy Name has not change by assigning ruby value.


// let iceCream = 'chocolate';
// if(iceCream === 'chocolate') {
//   document.alert('Yay, I love chocolate ice cream!');
// } else {
//   document.alert('Awwww, but chocolate is my favorite...');
// }
