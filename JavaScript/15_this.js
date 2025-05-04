// The this keyword in javaScript is a special keyword that refers to 
//the context in which the current code is being executed.
//Its value depends on how the function where this is used is called.

// 1: Global Context (Outside Any Function);
// In browsers : window
// In Node.js : ;Module's exports object

// 

// 2 : Inside a Function
// i : (Non-Strict Mode)
//when this is used inside a regular function, it refers to the global object
// ii : Strict Mode 
// this will be undefined inside a function.

// "use strict"

// //  a = 20;
// // console.log(a);

// function greet(){
//     console.log(this);
// }

// // greet();


// const obj = {
//     name : "rohit",
//     age : 29,
//     greet : function(){
//         console.log(this);
//     }
// }

// obj.greet();

//********************************************************************

// Arrow functions don't have their own this.
// Instead, they inherit this from the surrounding (lexical) scope.

// let obj = {
//     name : "Prithwi",
//     age : 21,
//     greet : () => {
//         console.log(this);
//     }
// }

// obj.greet();

// let obj = {
//     name : "rohit",
//     age : 23,
//     greet : function (){
//     let ab = () => {
//         console.log(this);
//     }
//     ab();
//     }
// }

// obj.greet(); 


//Inside a Constructor or class
// In constructors and classes, this refers to the instance of the object being created

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let a = new Person("rohit", 34);
// console.log(a);