// let num = 231;
// console.log(num.toExponential(2))
// console.log(typeof num.toExponential(2))
// console.log(num.toFixed(2));
// console.log(num.toPrecision(2))

// Math 

// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.random());

// //floor & ceil 
// let num = 23.4;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// console.log(Math.floor(Math.random()*10)+1);

// //30-40
// console.log(Math.floor(Math.random)*10)+30();
// console.log(Math.floor(Math.random()*10)+1); 


// const arr = [3, 4, 65, 23, 45, "Prithwi", true];
// console.log(arr[5]); //Prithwi
// console.log(arr[-1]); // undefined
// console.log(arr.at(-1)); // true 
// // at is latest, negative index le leta hai 
// console.log(arr.length);


// const arr = [3, 4, 65, 23, 45, "Prithwi", true];

// // push() add element in last 

// arr.push(50);
// console.log(arr);

// // pop() delete element in last 

// arr.pop();
// console.log(arr);

// //unshift add element in start

// arr.unshift("Rohit");
// console.log(arr);

// // shift delete element in start

// arr.shift();
// console.log(arr);

// //delete 

// delete arr[6];
// arr.push(false);
// console.log(arr);
// console.log(arr[4]);
// console.log(arr.length);


const arr = [3, 4, 65, 23, 45, "Prithwi", true, 4];

console.log(arr.indexOf(4));
console.log(arr.lastIndexOf(4));
console.log(arr.includes(8)); // false
console.log(arr.includes(23)); // true
