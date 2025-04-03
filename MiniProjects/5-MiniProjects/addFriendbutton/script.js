var fdStatus = document.querySelector("h4")
var btn = document.querySelector("#add")

var flag = 0;

btn.addEventListener("click", function(){
    if(flag == 0){
        fdStatus.innerHTML = "Friends";
        fdStatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        flag++;
    } else{
        fdStatus.innerHTML = "Stranger";
        fdStatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        flag--;
    }

})

