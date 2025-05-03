// Callback Function 

// function hello(fun){
//     console.log("Hey, i'm Hello");
//     fun();
// }

// function greet(){
//     console.log("I am call back function");
// }
// //method : 1
// hello(greet);

// //method : 2
// hello(function(){
//     console.log("I am Call back Fn.");
// })

// // using arrow function 

// hello(() => console.log("I am callback Function"));


// function fetchData(){
//     console.log("I am fetching data");
// }

// // fetchData fn call every 5s using setInterval Fn.
// setInterval(fetchData, 5000);   

//forEach

// let arr = [32,5,4,7,2];
// //single argument : number
// //second argument : index
// //third argumnet : array ko bhi pass

// arr.forEach((num,index,a) => {
//     a[index] = num*2;
// })

// console.log(arr);

// //second method 
// function greet(num){
//     console.log(num);
// }

// arr.forEach(greet);



//  filter

// let arr = [10, 24, 3, 49, 50, 60];

// const result = arr.filter((num) => {
//     return num%2 == 0;
// })

// console.log(result);

// const student = [
//     {name: "Prithwi", age : 21, marks:48},
//     {name: "Rohit", age : 24, marks:40},
//     {name: "mohit", age : 27, marks:70},
//     {name: "rohan", age : 31, marks:80},
//     {name: "mohan", age : 41, marks:90},
// ]

// // console.log(student[0].marks);

// // const res = student.filter((value) => value.marks > 50);
// const res = student.filter(({marks}) => marks > 50);

// console.log(res);

// map : result store and modify every element.
// forEach : result can't be stored in a variables.

const arr = [2, 4, 6,3];

const result = arr.map((num) => num*num);
console.log(result);
arr.forEach((num) =>  console.log(num + num));

const res = arr.filter((num) => num%2 == 0).map((num) => num*num);
console.log(res);