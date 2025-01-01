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


// //toUpperCase(), toLowerCase()
// const value = "Prihtwi Singh";

// //toUpperCase()
// console.log(value.toUpperCase());

// //toLowerCase()
// console.log(value.toLowerCase());

// //ParseInt & ParseFloat
// function expalinParseInt(value){
//     console.log("Original Value:", value);
//     let result = parseInt(value);
//     console.log("After parseInt:", result);
// }
// //Example Usage for parseInt
// console.log(expalinParseInt("42"));
// console.log(expalinParseInt("46px"));
// console.log(expalinParseInt("3.14"));

// function expalinParseFloat(value){
//     console.log("Original Value:", value);
//     let result = parseFloat(value);
//     console.log("After parseFloat:", result);
// }
// //Example Usage for parseInt
// console.log(expalinParseFloat("42"));
// console.log(expalinParseFloat("46px"));
// console.log(expalinParseFloat("3.14"));

// // pop() push() shift() unshift()
// const arr = [1,2,3,4];
// console.log("original arr :", arr);
// // pop method using to add element to end
// const push = arr.push(5);
// console.log("after using push: ",arr);

// //pop method using to remove element to end
// const pop = arr.pop(5);
// console.log("after using pop :",arr);

// //shift method using to remove element to start
// const shift = arr.shift(5);
// console.log("after using shift :",arr);

// //unshift method using to add element to start
// const unshift= arr.unshift(5);
// console.log("after using unshift :",arr);

//Concat forEach 
const initialArray = [1, 2, 3];
const secondaryArray = [4, 5, 6];

//concat
let finalArray = initialArray.concat(secondaryArray);
console.log(finalArray);

//forEach
function logThing(str){
    console.log(str);
}
finalArray.forEach(logThing);
