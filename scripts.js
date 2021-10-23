let nextPlayer = 'X'
// takes a value of either 'X' or 'O' according to the game turns

let ticTacToe = document.getElementsByTagName("td");//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let player1 = "X";
let player2 = "O";
let label = document.getElementById("next-lbl");
label.innerHTML() = nextPlayer;




//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    
    let btns = document.querySelectorAll("button");// Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for(let i=0;i<9;i++){
        btns[i].innerText = "[]";
    
    }
}

btns.addEventListener(takeCell);// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
let player1;
let player2;
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   if(nextPlayer == "X"){
     player1 = "X"
}else{
    player2 = "O"
   }


   

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver()){
        let gameOver = document.getElementById('game-over-lbl');
        gameOver.innerHTML() = "Game Over"

    }

        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
