let computerChoiceDisplay = document.getElementById("computer-choice"),
userChoiceDisplay = document.getElementById("user-choice"),
resultDisplay = document.getElementById("result"),
choice = document.querySelectorAll("button");

choice.forEach(choice => choice.addEventListener('click', (e) => {
    let userChoice = getUserChoice(e.target.id),
    computerChoice = generateComputerChoice(),
    result = getResult(userChoice, computerChoice);
    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceDisplay.innerHTML = computerChoice;
    resultDisplay.innerHTML = result;
}))

function getUserChoice(input) {
    if (input === "rock-button") { 
        return "Rock"; 
    }
    else if (input === "paper-button") { 
        return "Paper"; 
    }
    else if (input === "scissors-button") { 
        return "Scissors";
    }
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    }
    else if (randomNumber === 1) {
        return "Paper";
    }
    else if (randomNumber === 2) {
        return "Scissors";
    }
}

function getResult(userInput, computerInput) {
    if (userInput === computerInput) {
        return "Draw";
    }
    else if ((userInput === "Rock" && computerInput === "Scissors") || (userInput === "Paper" && computerInput === "Rock") || (userInput === "Scissors" && computerInput === "Paper")) {
        return "You Win!";
    }
    else {
        return "You Lose!";
    }
}