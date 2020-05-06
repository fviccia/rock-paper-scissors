let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', playRound); // don't use parens for playRound here. It will call the function and assign the value of that to the click event handler which will then error out because the callback requires a function and not the return value from a function (unless that is also a function)
});
  
let computerScore = 0;
let playerScore = 0;
let times = 0;

function playRound(e) { // e here is just a variable to grab the event object that I mentioned above that is passed into an event listener function. It could be called anything. e or event are normally used in JS.
  playerSelection = e.target.id; // the e object that was passed in has a property called target that references the element that the event listener originated from. You can use that to then grab the id from it.
  computerSelection = computerPlay();
  document.getElementById("playerPick").innerHTML = playerSelection;
  document.getElementById("computerPick").innerHTML = computerSelection;
  times++;
  let round = mainPlayRound(playerSelection, computerSelection);
  if (round === 'Computer wins the round!') {
        computerScore++;
    } else if (round === 'Player wins the round!') {
        playerScore++;
    } 

  document.getElementById("playerScore").innerHTML = 'Player wins ' + playerScore + ' rounds.';
  document.getElementById("computerScore").innerHTML = 'Computer wins ' + computerScore + ' rounds.';

  let result = '';

  if (times < 5) {
    document.getElementById("round").innerHTML = times;
  } else {
    if (computerScore === playerScore) {
      result = 'The game is a tie!';
  } else if (computerScore > playerScore) {
      result = 'Computer wins the game!';
  } else if (playerScore > computerScore) {
      result = 'Player wins the game!';
  }
  document.getElementById("show").innerHTML = result;
  
  }

  
}



function computerPlay() {
  let num = Math.floor(Math.random()*3);
  if (num == 0) {
      play = 'rock'
  } else if (num == 1) {
      play = 'paper'
  } else {
      play = 'scissors'
  }
  return play;
}
function userPlay() {
  let playerSelection = window.prompt('Choose Rock, Paper, Scissors');
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}
/*
                  rock	            paper	        scissors
rock	            tie	                player wins	    computer wins
paper	            computer wins	    tie	            player wins
scissors	        player wins	        computer wins	tie
*/
function mainPlayRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' & computerSelection === 'rock') {
      return 'The game is a tie!';
  } else if (playerSelection === 'rock' & computerSelection === 'paper') {
      return 'Computer wins the round!';
  } else if (playerSelection === 'rock' & computerSelection === 'scissors') {
      return 'Player wins the round!';
  } else if (playerSelection === 'paper' & computerSelection === 'rock') {
      return 'Player wins the round!';
  } else if (playerSelection === 'paper' & computerSelection === 'paper') {
      return 'The game is a tie!';
  } else if (playerSelection === 'paper' & computerSelection === 'scissors') {
      return 'Computer wins the round!';
  } else if (playerSelection === 'scissors' & computerSelection === 'rock') {
      return 'Computer wins the round!';
  } else if (playerSelection === 'scissors' & computerSelection === 'paper') {
      return 'Player wins the round!';
  } else if (playerSelection === 'scissors' & computerSelection === 'scissors') {
      return 'The game is a tie!';
  } else {
      return 'Not valid selection';
  }
} 

// function game() {
//     let computerScore = 0;
//     let playerScore = 0;

//     let playerSelection = userPlay();
//     let computerSelection = computerPlay();

//     let round = playRound(playerSelection, computerSelection);
//     console.log(round);

//     if (round === 'Computer wins the round!') {
//         computerScore++;
//     } else if (round === 'Player wins the round!') {
//         playerScore++;
//     } 
//     console.log('');
//     console.log('Computer wins ' + computerScore + ' rounds.');
//     console.log('Player wins ' + playerScore + ' rounds.');
//     console.log('');
//     if (computerScore === playerScore) {
//         return 'The game is a tie!'
//     } else if (computerScore > playerScore) {
//         return 'Computer wins the game!'
//     } else if (playerScore > computerScore) {
//         return 'Player wins the game!'
//     }
//     }