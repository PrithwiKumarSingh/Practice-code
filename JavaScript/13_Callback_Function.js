// Callback Function 

// function hello(fun){
//     console.log("Hey, i'm Hello");
//     fun();
// }

// function greet(){
//     console.log("I am call back function");
// }
// //method : 1
// hello(greet);

// //method : 2
// hello(function(){
//     console.log("I am Call back Fn.");
// })

// // using arrow function 

// hello(() => console.log("I am callback Function"));


function fetchData(){
    console.log("I am fetching data");
}

// fetchData fn call every 5s using setInterval Fn.
setInterval(fetchData, 5000);   