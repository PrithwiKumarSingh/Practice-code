// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const yellow = document.getElementById('yellow');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');
// const body = document.querySelector("body");

// red.addEventListener("click", ()=>{
//     body.style.backgroundColor = "red";
// })
// green.addEventListener("click", ()=>{
//     body.style.backgroundColor = "green";
// })
// blue.addEventListener("click", ()=>{
//     body.style.backgroundColor = "blue";
// })
// yellow.addEventListener("click", ()=>{
//     body.style.backgroundColor = "yellow";
// })
// purple.addEventListener("click", ()=>{
//     body.style.backgroundColor = "purple";
// }) 

const button = document.querySelectorAll("button");
const body = document.querySelector("body");
button.forEach((button)=>{
    button.addEventListener("click", ()=>{
        body.style.backgroundColor = button.cont;
    })
})