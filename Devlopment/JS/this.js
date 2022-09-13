// Rules.
// 1. If a function is called with a dot, the object before the dot is this.
// 2 . The value of this is evaluated during the run time.
// 3. value of 'this' depends from where it is called.
// 4. this points to the global object.
// 5 . this points to that objext form where the function is being called.

function type1(){
     console.log(this.name);
}

var name = "Zishan";
type1() ;  // this points to typ1 cause its called by global
function type2(){ 
     console.log(this.lname);  // 
     console.log(lname);

}

var lname = "Danish";
var obj = {
     lname : "Belal",
     type2
}

 obj.type2();   

 // 3
 var food = "Pizza";
 var obj = {
     food : "Pasta",
     eat(){
          console.log(this.food);
     }
 }

 var foo = obj.eat;
 foo();  // This will point to window cause its being called from window so pizza will print.

 //4 
var length = 1;
function square(){
     let cb = function(){
          console.log(this.length*this.length);
     }
     setTimeout(cb , 2000);
}

var obj = {
     length : 3,
     square
}

obj.square(); // will print 1 cause after 2 sec square call will finish and this will point to window.
// its same as class.
function Name(fname , lname){
     console.log(this);  // this will print empty {}
     this.fname = fname;
     this.lname = lname;
     console.log(this); // this will give key value pair.
}

var obj = new Name("Da" , "Be");  // constructor.
console.log(obj);

/*
js creates a new object {}.
js passes the object reference's to the function.
this -> {}

{
     fname : "Da",
     lname ; "Be"
}

*/