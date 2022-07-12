// linked to index.html | rock, paper and scissors game | 7/12/2022

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice

const possibleChoices = document.querySelectorAll('button'); // this choice randomly a option of the buttoms

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
}    
))