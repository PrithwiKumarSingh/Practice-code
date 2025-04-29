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


//second method to create
const person = new Object();

// properties add
person.name = "Prithwi";
person.age = 18;
person.gender = "Male";

console.log(person);

//delete 
delete person.age;
console.log(person);

//Modify or Update
person.name = "Rohit";
console.log(person);

