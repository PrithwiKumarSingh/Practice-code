const form = document.querySelector('form');



// change
// form.addEventListener('change', (event) =>{
//     console.log(event.target.value);
// })

//input
// form.addEventListener('input', (event) =>{
//     console.log(event.target.value);
// })

focusin
form.addEventListener('focusin', (event) =>{
    console.log(event.target.value);
})

