// let obj = {
//     name : "rohan",
//     age : 34,
//     gender : "male",
//     city : "Kotdwar"
// }

// // for in loop

// for(let key in obj){
//     console.log(key, obj[key]);
// }

// console.log(Object.keys(obj));


// let obj2 = Object.create(obj);
// obj2.money = 420;
// obj2.id = "Roh";
// console.log(obj2);


// const obj1 = {
//     name : "rohit",
//     age : 23,
//     account_number : 30001
// };

// Object.defineProperty(obj1, 'account_number', {
//     writable : false
// })

// obj1.account_number = 20001;
// obj1.name = "Prithwi";
// console.log(obj1.account_number);
// console.log(obj1.name);



// let user = {
//     name : "rohit",
//     age : 30
// }

// Object.defineProperty(user, 'name', {
//     writable : false,
// })


// user.name = "Prithwi";
// console.log(user);

// console.log(Object.getOwnPropertyDescriptor(user, "name"))


// for of loop

// const arr = [10, 20, 11, 18, 13];
// for(let value of arr){
//     console.log(value);
// } 

// let str = "Rohit is a Good Boy";
// for(let ch of str){
//     console.log(ch);
// }

let obj = {
    name : "Prithwi",
    age : 21,
    gender : "Male"
}
// Object ke sath ham for of ka use nahi kar sakte hai because object is not iterable.


// for(let value of obj){
//     console.log(value);
// }

for(let value of Object.values(obj)){
    console.log(value);
}