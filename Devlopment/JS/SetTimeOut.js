// function a(){
//      var b = 10;
//      var a = 20;
//      setTimeout(function(){
//            console.log(b);
//      } , 3000);
//      console.log(a);
// }

// a();

// Print a number 
//from 1 to 5 after every 1 second gap.

// function print(){
//      for(let i =1 ; i<=5 ; i++){
//           setTimeout(function(){
//                console.log(i);
//           }, i*1000);
//      }  
// }
  

// function print(){
//      for(var i =1 ; i<=5 ; i++){
//           setTimeout(function(){
//                console.log(i);   // will print 6,6,6,6,6 cause every time it update the value and var is function scoped .
//           } , i*1000)              // but for let every time its create a copy of i and print it.
//      }
// }

// if you want to do it using var then wrap it in a function and call it.

function print(){
   
     for(var i =1 ; i<=5 ; i++){
          function wrapper(b) { 
               setTimeout(function(){
                    console.log(b);  
               } , b*1000) ;            
           }
           wrapper(i)
    }
}
print();