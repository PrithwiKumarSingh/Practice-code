
let turn = "O";
let total_turn = 0;
const board = document.querySelector(".board");

let winner = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

let board_array = new Array(9).fill("E");
//   0.   1.   2.   3.   4.   5.   6.   7.   8.
// ["E", "E", "E", "E", "E", "E", "E", "E", "E"]

function checkWinner(){

    for(let [index0, index1, index2] of winner)
    {
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&& board_array[index1]===board_array[index2])
            return 1;
    }
    return 0;
}

const printer = (event) => {
    const elem = event.target;
    
    // if board is empty;

    if(board_array[elem.id] === "E"){

        total_turn++;
        const ch2 = document.getElementById('ch2');
        const ch1 = document.getElementById('ch1');
    if(turn==="O")
        { 
        ch1.style.scale = "1";
        ch1.style.filter = "none";  
        ch2.style.scale = "1.2";
        ch2.style.filter = "drop-shadow(0 0 20px rgba(181, 189, 255, 0.7))";
        elem.innerHTML = "O";
        elem.style.textShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px red, 0 0 30px red, 0 0 40px red, 0 0 55px red, 0 0 70px red";
        board_array[elem.id] = "O"
        if(checkWinner()){
            ch1.style.filter = "drop-shadow(0 0 20px rgba(181, 189, 255, 0.7))";
            ch1.style.scale = "1.5";
            document.getElementById('pl1').innerHTML = " !! Winner !!";
            document.getElementById('pl1').style.color = "greenyellow";
            document.getElementById('pl2').innerHTML= "! Losser !";
            document.getElementById('pl2').style.color = "#800000";

            board.removeEventListener("click",printer);
            return;
        }
        turn = "X";

    } 
    else{
        ch2.style.scale = "1"; 
        ch2.style.filter = "none";
        ch1.style.filter = "drop-shadow(0 0 20px rgba(181, 189, 255, 0.7))";
        ch1.style.scale = "1.2";
        elem.innerHTML = "X";
        elem.style.textShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6"
        board_array[elem.id] = "X"
        if(checkWinner()){
            ch2.style.scale = "1.5";  
            document.getElementById('pl2').innerHTML = " !! Winner !!";
            document.getElementById('pl2').style.color = "greenyellow";
            document.getElementById('pl1').innerHTML= "! Losser !";
            document.getElementById('pl1').style.color = "#800000";
            board.removeEventListener("click",printer);
            return;
        }
        turn = "O";

    }
}
if(total_turn==9){
    document.getElementById('winningMassage').innerHTML = "Match is Draw !";
    document.getElementById('winningMassage').style.color = "white";
    board.removeEventListener("click",printer);
    
}
}



board.addEventListener("click",printer);

const Restart = document.getElementById("restartgame");
Restart.addEventListener('click', ()=>{
    const cell = document.getElementsByClassName('ceil');
    Array.from(cell).forEach((value) => {
        value.innerHTML = "";
    })

    turn = "O";
    total_turn = 0;
    ch1.style.scale = "1.3";  
    board_array = new Array(9).fill("E");
    document.getElementById('winningMassage').innerHTML = "";
    board.addEventListener('click', printer);
    document.getElementById('ch1').style.scale = '1.2';
    document.getElementById('ch1').style.filter = 'drop-shadow(0 0 20px rgba(181, 189, 255, 0.7))';
    document.getElementById('ch2').style.scale = '1';
    document.getElementById('ch2').style.filter = 'none';
    document.getElementById('pl1').innerHTML = "";
    document.getElementById('pl2').innerHTML = "";

})
