let rps = {};

rps.getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return 'ROCK';
  } else if (num === 1) {
    return 'PAPER';
  }
  return 'SCISSORS';
}

rps.playRound = (playerMove) => {
  playerMove = playerMove.toUpperCase();
  let compMove = rps.getComputerChoice();
  let result = {
    playerMove: playerMove,
    compMove: compMove,
    winner: ''
  };
  
  if (playerMove === 'ROCK') {
    if (compMove === 'ROCK') {
      result.winner = 'TIE';
    } else if (compMove === 'PAPER') {
      result.winner = 'COMP';
    } else {
      result.winner = 'PLAYER';
    }
  } else if (playerMove === 'PAPER') {
    if (compMove === 'ROCK') {
      result.winner = 'PLAYER';
    } else if (compMove === 'PAPER') {
      result.winner = 'TIE';
    } else {
      result.winner = 'COMP';
    }
  } else if (playerMove === 'SCISSORS') {
    if (compMove === 'ROCK') {
      result.winner = 'COMP';
    } else if (compMove === 'PAPER') {
      result.winner = 'PLAYER';
    } else {
      result.winner = 'TIE';
    }
  } else {
    result.winner = 'ERROR';
  }
  
  return result;
}

rps.displayRoundResult = (result) => {
  let returnStr = '';
  if (result.winner === 'PLAYER') {
    returnStr = `You win! ${result.playerMove} beats ${result.compMove}`;
  } else if (result.winner === 'COMP') {
    returnStr = `You lose. ${result.playerMove} loses to ${result.compMove}`;
  } else if (result.winner === 'TIE') {
    returnStr = `You tie. ${result.playerMove} ties ${result.compMove}`;
  } else if (result.winner === 'ERROR') {
    returnStr = 'Error: Invalid input';
  } else {
    returnStr = 'Unknown error';
  }
  
  let para = document.createElement('p');
  para.textContent = returnStr;
  document.getElementById('round-results').appendChild(para);
}

rps.calculateScore = (resultStr) => {
  if (resultStr === 'PLAYER') {
    rps.playerScore += 1;
  } else if (resultStr === 'COMP') {
    rps.compScore += 1;
  }
  rps.updateScoreDisplay();
}

rps.updateScoreDisplay = () => {
  document.getElementById('score').textContent = `You: ${rps.playerScore}`
    + ` Computer: ${rps.compScore}`
    + ` Rounds Played: ${rps.rounds}`;
};

rps.maybeDeclareWinner = () => {
  if (rps.rounds >= 5) {
    let returnStr = '';
    if (rps.playerScore > rps.compScore) {
      returnStr = 'You win the game!';
    } else if (rps.playerScore < rps.compScore) {
      returnStr = 'You lose the game.';
    } else {
      returnStr = 'You tie the game.';
    }
    returnStr += ' Click "Reset Game" to play again!';
    document.getElementById('winner').textContent = returnStr;
    rps.endGame();
  }
}

rps.endGame = () => {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

rps.resetScores = () => {
  rps.playerScore = 0;
  rps.compScore = 0;
  rps.rounds = 0;
}

rps.resetGame = () => {
  rps.resetScores();
  rps.updateScoreDisplay();
  document.getElementById('winner').textContent = '';
  document.getElementById('round-results').innerHTML = '';
  document.getElementById('rock').disabled = false;
  document.getElementById('paper').disabled = false;
  document.getElementById('scissors').disabled = false;
}

rps.play = (playerMove) => {
  rps.rounds++;
  const result = rps.playRound(playerMove);
  rps.calculateScore(result.winner);
  rps.displayRoundResult(result);
  rps.maybeDeclareWinner();
}

rps.init = () => {
  rps.resetScores();
  
  document.querySelector('#rock').addEventListener('click',
    () => rps.play('rock'));
  
  document.querySelector('#paper').addEventListener('click',
    () => rps.play('paper'));
  
  document.querySelector('#scissors').addEventListener('click',
    () =>rps.play('scissors'));
  
  document.getElementById('reset').addEventListener('click',
    () => rps.resetGame());
}

rps.init();