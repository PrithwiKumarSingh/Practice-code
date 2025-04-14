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

const superHeroes = ["Spiderman", "Saktiman", "IronMan"];
console.log(superHeroes[0]);

const myObj = {
    name : "Prithwi",
    city : "Motihari",
    pincode : 845401
}

console.log(myObj["name"]);

const myFunction = function(a,b) {
    console.log(a+b);
}

myFunction(3,5)