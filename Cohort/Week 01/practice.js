//length, lastIndexOf, indexOf

function findIndexOf(str, target){
    console.log("Original String:", str);
    console.log("length:", str.length);
    console.log(`index of ${str} : ${str.indexOf(target)}`)
    console.log("indes:", str.lastIndexOf(target));
}
findIndexOf("Hello World World", "World");