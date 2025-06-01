
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
    if(turn==="O")
        { 
        elem.innerHTML = "O";
        board_array[elem.id] = "O"
        if(checkWinner()){
            document.getElementById('winningMassage').innerHTML = "Winner is O";
            board.removeEventListener("click",printer);
            return;
        }
        turn = "X";
    } 
    else{
        elem.innerHTML = "X";
        board_array[elem.id] = "X"
        if(checkWinner()){
            document.getElementById('winningMassage').innerHTML = "Winner is X";
            board.removeEventListener("click",printer);
            return;
        }
        turn = "O";
    }
}
if(total_turn==9){
    document.getElementById('winningMassage').innerHTML = "Match is Draw !";
    document.getElementById('winningMassage').style.color = "red";
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
    board_array = new Array(9).fill("E");
    document.getElementById('winningMassage').innerHTML = "";
    board.addEventListener('click', printer);

})