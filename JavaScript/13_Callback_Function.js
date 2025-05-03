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


// function fetchData(){
//     console.log("I am fetching data");
// }

// // fetchData fn call every 5s using setInterval Fn.
// setInterval(fetchData, 5000);   

//forEach

let arr = [32,5,4,7,2];
//single argument : number
//second argument : index
//third argumnet : array ko bhi pass

arr.forEach((num,index,a) => {
    a[index] = num*2;
})

console.log(arr);

//second method 
function greet(num){
    console.log(num);
}

arr.forEach(greet);
