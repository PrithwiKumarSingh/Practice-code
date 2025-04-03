var container = document.querySelector("#container");
var heart = document.querySelector("#container i");

container.addEventListener("dblclick", function(){
    heart.style.transform = "translate(-50%, -50%) scale(1)";
    heart.style.opacity = 0.8;

    setTimeout(() => {
        heart.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
        heart.style.transform = "translate(-50%, -50%) scale(0)";
    heart.style.opacity = 0;
    },2000);
})