let score = "33";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let valueInString = String(score);
// console.log(typeof valueInString);
// console.log(valueInString);

let isLoggedIn = ""; 
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "prithwi" => true


// ****************** Operator ****************


let str1 = "Prithwi";
let str2 = " Singh";
let str3 = str1 + str2;
console.log(str3);

let num1 = ("1" + 1);
let num2 = (1 + "2");
let num3 = ("1" + 1 + 2);
let num4 = (1 + 2 + "3");

console.table([num1, num2, num3, num4]);

let gameCounter = 100;
gameCounter++;
++gameCounter;
console.log(gameCounter);