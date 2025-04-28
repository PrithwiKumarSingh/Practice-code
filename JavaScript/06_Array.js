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

// // indexOf(): Returns the index of the .....

// console.log(arr.indexOf(4));
// console.log(arr.lastIndexOf(4));

// // includes(): Checks if an element exists.

// console.log(arr.includes(8)); // false
// console.log(arr.includes(23)); // true


console.log(arr);

//slice(): Extracts a portion of the array without modifying it. 

console.log(arr.slice(2,6));

// splice(): Method in JavaScript is a powerful array method used for modifying an array by adding, removing, or replacing elements.
// splice(starting_index, total_element_delete, add value);
console.log(arr);
// console.log(arr.splice(2,5));
console.log(arr.splice(2,5,"Money", 45));
console.log(arr);

// toString() converts an array to a string of (comma separated) array values. 


console.log(arr);
console.log(arr.toString());
console.log(arr.join("_"))