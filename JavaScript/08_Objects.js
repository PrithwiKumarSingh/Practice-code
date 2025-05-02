// // how to create object
 
// const accountDetails = {
//     customerName : "Prithwi Kumar",
//     accountNumber : 24302980952,
//     accountBalance : 3120,
//     gender : "Male",
//     age : 21,
//     undefined : 3, // consider as a string 
//     null : 4 // consider as a string both of them
// }

// console.log(accountDetails.gender);
// console.log(accountDetails["accountNumber"]);
// console.log(accountDetails["undefined"]);
// console.log(accountDetails ["accountBalance"]);


// //second method to create
// const person = new Object();

// // properties add
// person.name = "Prithwi";
// person.age = 18;
// person.gender = "Male";

// console.log(person);

// //delete 
// delete person.age;
// console.log(person);

// //Modify or Update
// person.name = "Rohit";
// console.log(person);

// //third method 

// class people{
//     constructor(name, age, gender){
//         this.name = name,
//         this.age = age,
//         this.gender = gender
//     }
// }

// let per1 = new people("Rohit", 23, "Male");
// let per2 = new people("Tina", 21, "Female");
// let per3 = new people("Mohit", 32, "Male");
// console.log( per1); 
// console.log(per2);
// console.log(per3);

// let obj = {
//     name : "rohit",
//     age : 30,
//     account_balance : 420,
//     gender : "male"
// }

// const arr = Object.keys(obj);
// console.log(arr);

// const arr1 = Object.values(obj);
// console.log(arr1);


// const obj ={
//     a : 10,
//     b : 20
// }

// let obj2 = obj;

// //shallow copy
// obj2.a = 20;
// console.log(obj2, obj);

// // deep copy
// let obj3 = structuredClone(obj);
// obj3.a = 59;
// console.log(obj3, obj2);

let num;
console.log(typeof num);

let obj = {
    name : "rohit",
    age : 34
};
console.log(typeof obj.age);