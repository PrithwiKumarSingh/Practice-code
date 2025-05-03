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

// const arr = [2, 4, 6,3];

// const result = arr.map((num) => num*num);
// console.log(result);
// arr.forEach((num) =>  console.log(num + num));

// const res = arr.filter((num) => num%2 == 0).map((num) => num*num);
// console.log(res);


//   reduce 
// const arr = [10, 20, 30, 40, 50];

// //const result  = arr.reduce(callback function, initialization)
// // const result = arr.reduce((acc, curr)=>{
// //     // console.log(acc,curr);
// //     acc = acc + curr;
// //     return acc;
// // }, 0);

// const result = arr.reduce((acc,curr) => acc + curr, 0);

// console.log(result);

// let arr = ["orange", "apple", "banana", "orange","apple", "banana", "orange", "grapess"];

// //final result ek object ke form 

// const result = arr.reduce((acc,curr) => {
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//     acc[curr] = 1;

//     return acc;
// },{});
// console.log(result);


// set

// const set1 = new Set ([20,54,64,64,63,32]);
// console.log(typeof set1);

// const set1 = new Set();
// set1.add(3);
// set1.add(4);
// set1.add("rohit");
// set1.add("Mohit");

// set1.delete("Mohit");
// console.log(set1);


// const user_id = new Set(["rohit_negi9", "Mohi_91","ravi.93","chavi_90", "sumit.39"]);
// let new_user = "pritwhi.films";
 
// if(user_id.has(new_user)){
//     console.log("Already ! exits this user name.");
// } else{
//     console.log("No exitst ! You can make them");
// }

// let arr = [10,20,30,10,30,40,50];
// const str2 = new Set(arr);
//  arr = [...arr];
// console.log(arr);

// let set1 = new Set([10,20,35,40,50]);
// let set2 = new Set([10,20,30,40,50,60,70]);

// let set3 = new Set([...set1, ...set2]);
// console.log(set3);

// intersection
//filter: array
// const result = [...set1].filter((num) => set2.has(num));
// console.log(result);

//Iterate over set
//for of: iterator
// for(let value of set1){
//     console.log(value);
// }

// set1.forEach((value) => console.log(value));






// // key value pair: key should be unique
// const map1 = new Map();
// map1.set(3,59);
// map1.set('rohit', 33);
// map1.set(30, "sohan");
// map1.set(35, 'rohit')
// map1.delete(35);

// console.log(map1.has("rohit"));

// console.log(map1);


const map1 = new Map([[23, "rohit"], ["Mohan", "rohan"],[30,38], [68,19]]);

// for of loop

// for(let value of map1){
//     // console.log(value);

//     for(let res of value){
//         console.log(res);
//     }
// }

for(let [key,value] of map1){
    console.log(key, value);
}