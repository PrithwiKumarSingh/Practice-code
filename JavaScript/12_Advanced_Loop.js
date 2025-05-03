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


const obj1 = {
    name : "rohit",
    age : 23,
    account_number : 30001
};

Object.defineProperty(obj1, 'account_number', {
    writable : false
})

obj1.account_number = 20001;
obj1.name = "Prithwi";
console.log(obj1.account_number);
console.log(obj1.name);