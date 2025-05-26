// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');
// const forth = document.getElementById('forth');
// const fifth = document.getElementById('fifth');
const body = document.querySelector("body");

// first.addEventListener("click", ()=>{
//     body.style.backgroundImage = "url('/1.jpg')";
//     body.style.backgroundSize = '100% auto';
// })
// second.addEventListener("click", ()=>{
//     body.style.backgroundImage = "url('/2.jpg')";
//     body.style.backgroundSize = '100% auto';
// })
// third.addEventListener("click", ()=>{
//     body.style.backgroundImage = "url('/3.jpg')";
//     body.style.backgroundSize = '100% auto';
// })
// forth.addEventListener("click", ()=>{
//     body.style.backgroundImage = "url('/4.jpg')";
//     body.style.backgroundSize = '100% auto';
// })
// fifth.addEventListener("click", ()=>{
//     body.style.backgroundImage = "url('/5.jpg')";
//     body.style.backgroundSize = '100% auto';
// }) 


// ************** Optimization on using foreach() **********

// const button = document.querySelectorAll("button");
// const body = document.querySelector("body");
// button.forEach((button)=>{
//     button.addEventListener("click", ()=>{
//         body.style.backgroundColor = button.cont;
//     })
// })




// **********  event bubbling (false) & event capturing (true) 


const root = document.querySelector("#root");
// root.addEventListener("click", (event)=>{
//    document.body.style.backgroundColor = event.target.id;
// })


root.addEventListener("click", (event) => {
    if(event.target.tagName == "BUTTON"){
        // console.log(event.target.dataset.image)
        body.style.backgroundImage = `url('${event.target.dataset.image}')`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center';

    }
})