function computerPlay() { /* Makes computer choose opposing throw */
  let throwChoices = ["Rock", "Paper", "Scissors"];
  return throwChoices[Math.floor(Math.random() * throwChoices.length)]
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = window.prompt("Input your throw!");
  if (playerSelection.toUpperCase === "ROCK"){
    if (computerSelection.toUpperCase === "SCISSORS"){
      return "You won!";
    }
    else if (computerSelection.toUpperCase === "PAPER"){
      return "You Lost!";
    }
    else if (computerSelection.toUpperCase === "ROCK"){
      return "Draw!"
    }
}

  else if (playerSelection.toUpperCase === "PAPER"){
    if (computerSelection.toUpperCase === "ROCK"){
      return "You Won!";
    }
    else if (computerSelection.toUpperCase === "SCISSORS"){
      return "You Lost!";
    }
    else if (computerSelection.toUpperCase === "PAPER"){
      return "Draw!";
    }
  }

  else if (playerSelection.toUpperCase === "SCISSORS"){
    if (computerSelection.toUpperCase === "PAPER"){
      return "You Won!";
    }
    else if (computerSelection.toUpperCase === "ROCK"){
      return "You Lost!";
    }
    else if (computerSelection.toUpperCase === "SCISSORS"){
      return "Draw!";
    }
  }
}