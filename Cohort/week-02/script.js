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
let num = [1, 2, 3, 4, 5];
let double = num.map(function(el){
    return el * 2; 
})
console.log(double);

 
let squreValue = num.map(function(el){
    return el * el;
});

console.log(squreValue);

function eachElement(arr, num){
    return new Promise(function(resolve){
        resolve(arr.map(function(el){
            return el * num;
        }))
    })
}

let arr = [1, 2, 3, 4, 5, 6];
async function callEachElement() {
    let value = await eachElement(arr, 4);
    console.log(value);
}

callEachElement();