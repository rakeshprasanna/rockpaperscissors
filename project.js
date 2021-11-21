function computerPlay() {
    const choice =["ROCK","PAPER","SCISSORS"];
    return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection=prompt("Please Enter your choice");
    playerSelection=playerSelection.toUpperCase()
    computerSelection=computerPlay();
    let ifPlayerWon=false;

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

  function game(isDraw,ifPlayerWon){
    let playerPoints=0;
    let computerPoints=0;
    let play;
      for (let index = 0; index < 5; index++) {
          play=playRound();
          console.log(play);
          if(ifPlayerWon===true) playerPoints++;
          else if (ifPlayerWon===false) computerPoints++;
          console.log(playerPoints);
      }
    if(playerPoints>computerPoints) console.log("Player WINS!");
    else console.log("Player LOSES");
  }

  game();