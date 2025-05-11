
const quotes = [
    "Honesty is the Best policy",
    "You Want to Earn 1000000$",
    "Focus On You Goals",
    "Belive on you self",
    "Be Consistancy and maintain it.",
    "Always Be Happy",
    "Eat, Sleep, Code, Repeat",
    "Money is EveryThing"
]




// setInterval(genrateQuotes,5000);


const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
    // console.log(event.target);
    console.log(event.type);
    // console.log(event.key);
    console.log(event.clientX);
    console.log(event.clientY);

    const text = document.getElementById("quote");
    const index = Math.floor(Math.random()*quotes.length);
    text.textContent = quotes[index];
})



// btn.addEventListener("keydown",(event) => {
//     if(event.key === "Enter"){
//     const text = document.getElementById("quote");
//     const index = Math.floor(Math.random()*quotes.length);
//     text.textContent = quotes[index];
//     }
// })

//change the background every 5 seconds.