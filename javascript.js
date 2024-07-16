console.log("hello world"); //test to make sure script is working with html

const textContainer = document.querySelector('#textContainer');

const postComputerChoice = document.createElement('div');
postComputerChoice.classList.add('postComputerChoice');

const postHumanChoice = document.createElement('div');
postHumanChoice.classList.add('postHumanChoice');


const postHumanScore = document.createElement('div');
postHumanScore.classList.add('postHumanScore');

const postComputerScore = document.createElement('div');
postComputerScore.classList.add('postComputerScore');


const postRoundNumber = document.createElement('div');
postRoundNumber.classList.add('postRoundNumber');
postRoundNumber.setAttribute('style', "color: blue");
postRoundNumber.style.fontWeight = 'bold';

const postRoundOutcome = document.createElement('div');
postRoundOutcome.classList.add('postRoundOutcome');
postRoundOutcome.style.color = 'green';


const postWinner = document.createElement('div');
postWinner.classList.add('postWinner');
postWinner.style.color = 'red';


function getComputerChoice() {
   let computerChoice;
   const randNum = Math.floor(Math.random() *3 +1); 

    if (randNum === 1) {
        computerChoice = 'rock';
    } else {
        if (randNum === 2) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        }
    };
    postComputerChoice.textContent = 'Computer chooses ' + computerChoice + '!';
   return computerChoice;
}


const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    postWinner.textContent = '';
    const humanSelection = 'rock';
    postHumanChoice.textContent = 'You choose ' + humanSelection + '!';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    postWinner.textContent = '';
    const humanSelection = 'paper';
    postHumanChoice.textContent = 'You choose ' + humanSelection + '!';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    postWinner.textContent = '';
    const humanSelection = 'scissors';
    postHumanChoice.textContent = 'You choose ' + humanSelection + '!';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});


let humanScore = 0;
let computerScore = 0;
let round = 0;


function playRound(humanChoice, computerChoice){
    
    if (humanChoice !== undefined){
        if (humanChoice === computerChoice)
            {
                round++;
                postRoundOutcome.textContent = "It's a draw! No points for you!";
            } else if(humanChoice !== computerChoice) 
                {
                    if (humanChoice == "rock" && computerChoice == "paper") 
                        {
                            round++;
                            postRoundOutcome.textContent = "You lose! Paper beats rock.";
                            computerScore++;
                        } else if (humanChoice == "rock" && computerChoice == "scissors")
                            {
                                round++;
                                postRoundOutcome.textContent = "You win! Rock beats scissors.";
                                humanScore++;
                            } else if (humanChoice == "paper" && computerChoice == "rock")
                                {
                                    round++;
                                    postRoundOutcome.textContent = "You win! Paper beats rock.";
                                    humanScore++;
                                } else if (humanChoice == "paper" && computerChoice == "scissors")
                                    {
                                        round++;
                                        postRoundOutcome.textContent = "You lose! Scissors beats paper.";
                                        computerScore++;
                                    } else if (humanChoice == "scissors" && computerChoice == "rock")
                                        {
                                            postRoundOutcome.textContent = "You lose! Rock beats scissors.";
                                            computerScore++;
                                            round++;
                                        } else if (humanChoice == "scissors" && computerChoice == "paper")
                                            {
                                                round++;
                                                postRoundOutcome.textContent = "You win! Scissors beats paper.";
                                                humanScore++;
                                            }
                }
            }

    postRoundNumber.textContent = 'Round ' + round;
    textContainer.appendChild(postRoundNumber);

    textContainer.appendChild(postHumanChoice);
    textContainer.appendChild(postComputerChoice); 
    textContainer.appendChild(postRoundOutcome);
    
    postHumanScore.textContent = 'Your score = ' + humanScore;
    textContainer.appendChild(postHumanScore);

    postComputerScore.textContent = 'The computer\'s score = ' + computerScore;
    textContainer.appendChild(postComputerScore);

    if (round == 5) {
            if (humanScore == computerScore){
                postWinner.textContent = "The game is a draw!";
                round = 0;
                humanScore = 0;
                computerScore = 0;
            } else if (humanScore > computerScore){
                postWinner.textContent = "You win the game!";
                round = 0;
                humanScore = 0;
                computerScore = 0;
            } else if (humanScore < computerScore) {
                postWinner.textContent = "The computer wins the game...";
                round = 0;
                computerScore = 0;
            }
        }
    
    textContainer.appendChild(postWinner);
    }


