//length, lastIndexOf, indexOf

// function findIndexOf(str, target){
//     console.log("Original String:", str);
//     console.log("length:", str.length);
//     console.log(`index of ${str} : ${str.indexOf(target)}`)
//     console.log("indes:", str.lastIndexOf(target));
// }
// findIndexOf("Hello World World", "World");


// // slice

// function getSlice(str, start, end){
//     console.log("Original String:", str);
//     console.log("After slice:", str.slice(start, end));
// }
// getSlice("prithwi", 2,5);

// function cutIt(str, startIndex, endIndex){
//     let newStr = "";
//     for(let i=0; i<str.length; i++){
//         if(i >= startIndex && i<endIndex){
//             newStr = newStr + str[i]; 
//         }
//     }
//     return newStr;
// }

// const value = "harkirat singh";
// let ans2 = value.slice(2,5)
// console.log(ans2);
// console.log(cutIt(value, 2, 5));  

// // replace split trim() method 

// const str = "hello world";
// let value = str.replace("world", "JavaScript");
// console.log(value);
// //replace("target", "value")

// const para = "Hi My Name Is Prithwi Singh"
// let res = para.split(" ");
// console.log(res);
// // split method using to convert in an array to particular arg. space, comma, and more

// const val = "    Prithwi Singh        ";
// console.log(val.trim());
// // trim method using to remove extra space start and end point 


//toUpperCase(), toLowerCase()
const value = "Prihtwi Singh";

//toUpperCase()
console.log(value.toUpperCase());

//toLowerCase()
console.log(value.toLowerCase());