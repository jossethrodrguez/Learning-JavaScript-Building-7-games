// linked to index.html | rock, paper and scissors game | 7/12/2022

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

let userChoice
let computerChoice
let result

const possibleChoices = document.querySelectorAll('button'); // this choice randomly a option of the buttoms

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}    
))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 1){
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'its a draw'
    }

    // Computer Choice : Rock
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You Win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You Lost!'
    }

    // Computer Choice : Paper
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You Win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You Lost!'
    }
    
    // Computer Choice : Scissors
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You Win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You Lost!'
    }
    resultDisplay.innerHTML = result
    
}