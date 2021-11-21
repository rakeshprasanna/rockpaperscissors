function computerPlay() {
    const choice =["ROCK","PAPER","SCISSORS"];
    return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection=prompt(playerSelection.toUpperCase());
    computerSelection=computerPlay();
    let ifPlayerWon=false;
    let isDraw=false;

    switch (playerSelection) {
        case "ROCK":
            if (computerSelection==="PAPER") {
                return "You Lose! Paper beats Rock";
            } else {
                ifPlayerWon=true;
                return "You won a Point";
            }
        case "PAPER":
            if (computerSelection==="SCISSORS") {
                return "You Lose! Scissors beats Paper";
            } else {
                ifPlayerWon=true;
                return "You won a Point";
            }
        case "SCISSORS":
            if (computerSelection==="STONE") {
                return "You Lose! Stone beats Scissors";
            } else {
                ifPlayerWon=true;
                return "You won a Point";
            }
        default:
            isDraw=true;
            return "MATCH DRAW";
    }

  }

  function game(){
    let playerPoints=0;
    let computerPoints=0;
      for (let index = 0; index < 5; index++) {
          playRound();
          if(isDraw==true){
              index--;
              continue;
          }
          else{
          if(isDraw==false && ifPlayerWon==true) playerPoints++;
          else if (isDraw==false && ifPlayerWon==false) computerPoints++;
          }
      }
    if(playerPoints>computerPoints) console.log("Player WINS!");
    else console.log("Player LOSES");
  }

  game();