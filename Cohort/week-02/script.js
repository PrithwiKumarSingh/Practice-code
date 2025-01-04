// // setTimout inside setTimeout 

// setTimeout(function (){
//     console.log("Hello World");
//     setTimeout(function (){
//         console.log("Hello Wolrd inside ");
//         setTimeout(function(){
//             console.log("Hello world inside of inside");
//         }, 8000)
//     },5000)
// }, 1000);

//===============>>>>  map   <<<<=======================
// let num = [1, 2, 3, 4, 5];
// let double = num.map(function(el){
//     return el * 2; 
// })
// console.log(double);

 
// let squreValue = num.map(function(el){
//     return el * el;
// });

// console.log(squreValue);

// function eachElement(arr, num){
//     return new Promise(function(resolve){
//         resolve(arr.map(function(el){
//             return el * num;
//         }))
//     })
// }

// let arr = [1, 2, 3, 4, 5, 6];
// async function callEachElement() {
//     let value = await eachElement(arr, 4);
//     console.log(value);
// }

// callEachElement();


//================>>>>>  Filter   <<<<==============

//Question - Convert an array of numbers into a new array with only the even elements

function generateArray(num){
    let arr = [];
    for(let i=0; i<num; i++){
        arr.push(i);
    }
    return arr;
}

// let newEven = arr.filter(function(el){
//    return  el % 2 === 0;
// })
// using arrow fn 
let n = 100;
let newEvenfilter = generateArray(n).filter((num) => num % 2 == 0);
// let newOddfilter = arr.filter((num) => num % 2 == 1);
console.log("Original Array : ", generateArray(n));
console.log("filtering Even : ",newEvenfilter);
// console.log("filtering Odd : ", newOddfilter);
