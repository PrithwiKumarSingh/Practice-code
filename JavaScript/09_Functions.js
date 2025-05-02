// function greet(){
//     console.log("Hello welcome to my code. i hope you all are good.")

// }

// greet();
// //sum : function

// function sum( a,  b){
//     console.log(a+b);
// }

// sum(3,5);
// sum(34,5);

// // Multiplication : Function

// function multiply(a,b){
//     console.log(a*b);
// }

// multiply(3,6);
// multiply(54,3);


// const func = function sayHello(){
//     console.log("Hello !");
//     return "Radhe Radhe";
//     console.log("ye print nahi hoga");
// }

// func();
// console.log(func());

// Arrow Function

//sum : arrow fuction
// const sum = (a,b) => a + b;
// console.log(sum(4,6));
// console.log(sum(47,63));
// console.log(sum(7,7));


// // cube : arrow function 
// const cube = (num) => num * num * num;
// console.log(cube(3));
// console.log(cube(9));
// console.log(cube(30));



//spread operator or rest operator 

// let arr = [3,5,6,7,4];
// //spread operator 
// let arr2 = [...arr];

// //rest operator 
// const sum = (...num) => {
//     // for loop sum nikal sakta hu
//     console.log(num);
// }

// sum(3,5,6);
// sum(3,6,3,7,5);
// //sum(3,5);


let obj = {
    name : "rohit",
    age : 30,
    amount : 420
}

function fun(obj){
    console.log(obj.name,obj.amount);
}

fun(obj);