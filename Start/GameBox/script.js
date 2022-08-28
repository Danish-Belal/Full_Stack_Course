
let gameBox = document.getElementById('gameBox');
let context = gameBox.getContext('2d');

let posX= 0;
let posY= 0;

setInterval(function(){
     posX+=10;
    posY+=10;
    context.clearRect(0, 0, gameBox.width, gameBox.height);
    context.fillRect(posX, posY, 50, 50);
    
} , 2000/60);

