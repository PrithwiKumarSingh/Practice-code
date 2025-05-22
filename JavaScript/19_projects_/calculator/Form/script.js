const form = document.querySelector('form');



// change
// form.addEventListener('change', (event) =>{
//     console.log(event.target.value);
// })

//input
// form.addEventListener('input', (event) =>{
//     console.log(event.target.value);
// })

// focusin
// form.addEventListener('focusin', (event) =>{
//     console.log(event.target.value);
// })

// focusout
// form.addEventListener('focusout', (event) =>{
//     console.log(event.target.value);
// })


// click 
// form.addEventListener('click', (event) =>{
//     // console.log(event.target.value);
//     console.log("single click");
// })

// dbclick 
// form.addEventListener('dbclick', (event) =>{
//     // console.log(event.target.value);
//     console.log("double click");
// })

// // submit
// form.addEventListener('submit', (event) =>{
//     // console.log(event.target.value);
//     console.log("Form Submitted");
// })

// //Reset
// form.addEventListener('reset', (event) =>{
//     // console.log(event.target.value);
//     console.log("Form Reset");
// })


form.addEventListener("submit", (event) => {

    //usnig preventDefault() : to stop reload pages.
    event.preventDefault();

    const first = document.getElementById('first');
    console.log(first.value);

    const second = document.getElementById('second');
    console.log(second.value);

    const third = document.getElementById('third');
    console.log(third.value);

    const result = document.getElementById('result');
    result.innerHTML = `${first.value} ${second.value} is a good Boy`;
    document.body.append(result);
})