//  var button= document.getElementsByClassName('btn');

//  button.addEventListener('click', function(){
//      console.log("Hello Danish");
//  });



// console.log(window.documentElement);   // will give the document element.
// console.log(window);

// var heading  = document.getElementById('one');
// console.log(heading);

var hh = document.getElementsByTagName('h1');
hh[1].innerText = 'Modified Heading by Danish';

// Add Event Listner.
// EventListener is nothing but a function.
var button = document.getElementById('btn');
button.addEventListener('click' , function(){alert('Hola Danish')});
console.log('Hello bro');


// Mouse out and mouse over.
var mouseclick = document.getElementById('red');
// mouseclick.addEventListener('mouseover' , function(){
//      alert('Mouse over');
// });

mouseclick.addEventListener('mouseout' , function(){
     alert('Mouse out');
});

var keyPress = document.getElementById('input');
// keyPress.addEventListener('keypress' , function(){
//      console.log('Input being provided');
// });
keyPress.addEventListener('keydown' , function(event){  // key down works for shift up and down keys also.
     console.log('Input being provided' , event.keyCode);
});


// stop propagation.
mouseclick.addEventListener('mouseover' , function(event){
     alert('Mouse over');
     event.stopPropagation();   // this stop the propagation.

});


//"use strict"   its ensure that every varivable like var let  define before use .

"use Strict"

demo = 1000;
console.log(demo);
