console.log("hello world");

//computer chooses random number between 1 and 3
// 1 is rock
// 2 is paper
// 3 is scissors
//computer returns choice
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

   return computerChoice;
}

//get human input
//ask for rock, paper, or scissors

function getHumanChoice() {
    let humanChoice = prompt("Which do you choose: rock, paper, or scissors?");
    return humanChoice;
}

//if null, then null
//if not rock, paper, or scissor, ask again