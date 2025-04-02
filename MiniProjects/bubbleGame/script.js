var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubbles(){
    var clutter = " ";

for(let i=1; i<=250; i++){
   var rn = Math.floor(Math.random()*10);
    clutter += `<div id="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function Timer(){
    var timeint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#TimerCount").textContent = timer;
        } else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1 style="color: red;"> Game Over !</h1> `
        }
    },1000)

}

function getnewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitCount").textContent = hitrn;
}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum == hitrn){
        increaseScore();
        makeBubbles();
        getnewHit();
    }
})

Timer();
makeBubbles();
getnewHit();