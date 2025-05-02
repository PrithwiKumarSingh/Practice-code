//  loop : ek hi kaam ko baar baar karna 


// for (let i=0; i<20; i++){
//     console.log("Radhe Radhe");
// }


// Nested for loop : 

// for(let i=1; i<=5; i++){
//     for(let j=1; j<=5; j++){
//         console.log(j);
//     }
// }


// Global Scope, Local Scope (functional scope) & Block Scope

//Global Scope
// let a = 10;
// var b = 20;
// const c = 30;

function greet(){  
    // local scope (jo function ke andar aata ho)
    let a = 10;
    var b = 20;
    const c = 30;

    console.log("Hello Function");
    console.log(a,b,c);

}



var b = 300;

if(true){
    //block scope (jo if-else and loop ke andar hota hai)
    let a = 10;
    var b = 20;
    const c = 30;

}

//this is the reason we can't use var most of the time.
console.log(b);
