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
  let retStr = '';
  
  if (playerMove === 'ROCK') {
    if (compMove === 'ROCK') {
      retStr = 'You tie. Rock ties Rock';
    } else if (compMove === 'PAPER') {
      retStr = 'You lose! Paper beats Rock';
    } else {
      retStr = 'You win! Rock beats Scissors';
    }
  } else if (playerMove === 'PAPER') {
    if (compMove === 'ROCK') {
      retStr = 'You win! Paper beats Rock';
    } else if (compMove === 'PAPER') {
      retStr = 'You tie. Paper ties Paper';
    } else {
      retStr = 'You lose! Scissors beats Paper';
    }
  } else if (playerMove === 'SCISSORS') {
    if (compMove === 'ROCK') {
      retStr = 'You lose! Rock beats Scissors';
    } else if (compMove === 'PAPER') {
      retStr = 'You win! Scissors beats Paper';
    } else {
      retStr = 'You tie. Scissors ties Scissors';
    }
  } else {
    retStr = 'Invalid input';
  }
  return retStr;
}

rps.game = () => {
  let playerScore = 0;
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerMove = prompt('What is your move?');
    let result = rps.playRound(playerMove);
    console.log(result);
    if (result.slice(0, 7) === 'You win') {
      playerScore++;
    } else if (result.slice(0, 8) === 'You lose') {
      compScore++
    }
  }
  
  console.log(`Your score: ${playerScore}`);
  console.log(`Computer score: ${compScore}`);
  if (playerScore > compScore) {
    console.log('You win the game!');
  } else if (compScore > playerScore) {
    console.log('You lose the game.');
  } else if (playerScore === compScore) {
    console.log('Somehow, you tied the game.');
  }
}