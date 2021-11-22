let ifPlayerWon;

function computerPlay() {
    const choice =["ROCK","PAPER","SCISSORS"];
    return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection=prompt("Please Enter your choice");
    playerSelection=playerSelection.toUpperCase()
    computerSelection=computerPlay();

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
    }

  }

  function game(){
    let playerPoints=0;
    let computerPoints=0;
    let play;
      for (let index = 0; index < 5; index++) {
          ifPlayerWon=false;
          play=playRound();
          console.log(play);
          if(ifPlayerWon===true) playerPoints=playerPoints+1;
          else if (ifPlayerWon===false) computerPoints=computerPoints+1;
          console.log(playerPoints +"   "+computerPoints);
      }
    if(playerPoints>computerPoints) console.log("Player WINS!");
    else console.log("Player LOSES");
  }

  game();