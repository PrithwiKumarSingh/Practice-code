// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = "100";
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);
// console.log(id == anotherId);


const bigNumber = 463453456346354634n;

// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof bigNumber);


// Reference (Non Primitive)

//Array, Objects, Functions

// const superHeroes = ["Spiderman", "Saktiman", "IronMan"];
// console.log(superHeroes[0]);

// const myObj = {
//     name : "Prithwi",
//     city : "Motihari",
//     pincode : 845401
// }

// console.log(myObj["name"]);

// const myFunction = function(a,b) {
//     console.log(a+b);
// }

// myFunction(3,5)

// //premitive datatype
// const num = 10;
// // num = 20;
// console.log(num);


// //Non-Primitive Datatype 
// const obj = {
//     id: 104,
//     city: "Motihari", 
//     State: "Bihar"
// }

// obj.city = "Pune";
// obj.State = "Maharastra";
// console.log(obj);

// let obj1 = {
//     id: 104,
//     city: "Motihari",
//     State: "Bihar"
// }

// obj = obj1;
// console.log(obj);



// // String 


// let price = 56;
// console.log("Price of Onion is : ", price , "Fixed Rate");  //Old Fashion String 

// console.log(`Price of Onion is : ${price} Fixed Rate`); // Modern String 

// // String Concatination 

// let s1 = "Hello ";
// let s2 = "Prithwi Singh";
// let s3 = s1+s2;
// console.log(s3.length);


// let Person_Name = "Prithwi";

// console.log(Person_Name);
// console.log(Person_Name.toUpperCase());
// console.log(Person_Name.toLowerCase());


// let hero = "Hello Prithwi Singh";
// console.log(hero.indexOf("Prithwi")); //6
// console.log(hero.indexOf("prithwi"));  //-1
// console.log(hero.lastIndexOf("Prithwi"));  //6
// console.log(hero.includes("prithwi")); //false


// let str = new String ("Hello Prithwi Singh");
// console.log(str[0]);