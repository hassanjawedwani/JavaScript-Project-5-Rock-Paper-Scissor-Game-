const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
const resultMsgText = document.getElementById('result-message');
const winnerMsgText = document.getElementById('winner-message');
const controls = document.getElementById('controls-section');
const restart = document.getElementById('restart');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

let playerScore = 0;
let computerScore = 0;

const computerSelection = () => {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
}

const hasPlayerWon = (ps, cs) => {
  return (ps === 'rock' && cs === 'scissor') ||
  (ps === 'paper' && cs === 'rock') ||
  (ps === 'scissor' && cs === 'paper') ;
}

const swapOptions = () => {
  controls.style.display = "none";

}

const showResult = (playerSelection) => {
  
  const cs = computerSelection();
  const result = hasPlayerWon(playerSelection, cs);
  if (playerSelection === cs) {
    resultMsgText.innerHTML = "Match tie";
  }
  else if(result) {
    resultMsgText.innerHTML = "player won";
    playerScore++;
    playerScoreText.innerText = playerScore;
  }
  else {
    resultMsgText.innerHTML = "computer won";
    computerScore++;
    computerScoreText.innerText = computerScore;  
  }
  if (playerScore === 3)  {
    winnerMsgText.innerText = "player won the total game";
    swapOptions();
  }
  else if (computerScore === 3) {
    winnerMsgText.innerText = "computer won the total game"
    swapOptions();
  }
}

const restartfunc = () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreText.innerText = 0;
  computerScoreText.innerText = 0;
  controls.style.display = "block";
  winnerMsgText.innerText = "";
  resultMsgText.innerText = "";

}


rock.addEventListener('click', ()=>showResult("rock"));
paper.addEventListener('click', ()=>showResult("paper"));
scissor.addEventListener('click',() => showResult("scissor"));
restart.addEventListener('click',restartfunc);