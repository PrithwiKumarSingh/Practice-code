//length, lastIndexOf, indexOf

// function findIndexOf(str, target){
//     console.log("Original String:", str);
//     console.log("length:", str.length);
//     console.log(`index of ${str} : ${str.indexOf(target)}`)
//     console.log("indes:", str.lastIndexOf(target));
// }
// findIndexOf("Hello World World", "World");


// slice

function getSlice(str, start, end){
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
}
getSlice("prithwi", 2,5);

function cutIt(str, startIndex, endIndex){
    let newStr = "";
    for(let i=0; i<str.length; i++){
        if(i >= startIndex && i<endIndex){
            newStr = newStr + str[i]; 
        }
    }
    return newStr;
}

const value = "harkirat singh";
let ans2 = value.slice(2,5)
console.log(ans2);
console.log(cutIt(value, 2, 5));  