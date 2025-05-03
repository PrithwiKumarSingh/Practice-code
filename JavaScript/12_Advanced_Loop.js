// let obj = {
//     name : "rohan",
//     age : 34,
//     gender : "male",
//     city : "Kotdwar"
// }

// for in loop

for(let key in obj){
    console.log(key, obj[key]);
}

console.log(Object.keys(obj));


let obj2 = Object.create(obj);
obj2.money = 420;
obj2.id = "Roh";
console.log(obj2);


