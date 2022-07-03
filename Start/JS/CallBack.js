function sayHello() {
     console.log("Hello...");
}

function add(num1, num2, callback) {
     console.log(num1 + num2);
     callback();

}

add(10, 15, sayHello);