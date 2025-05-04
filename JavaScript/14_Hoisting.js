//Hoisting

// let x;
// var y;
// console.log(x);
// console.log(y);

//  x = 12;
//  y = 4;


greet();

function greet(){
    console.log("Hello World");
}

meet();

let meet = function(){
    console.log("hello second");
}