const button = document.querySelector("button");
button.addEventListener("click", () =>{

    //Read the data
    const input1 = document.getElementById("first");
    const number1 = Number(input1.value);

    const input2 = document.getElementById("second");
    const number2 = Number(input2.value);


    //Output the result 
    const result = number1 + number2;
    const res = document.getElementById("result");
    res.textContent ="Result : "+result;
})

