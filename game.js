const rockDisplay = document.getElementById('rock')
const paperDisplay = document.getElementById('paper')
const scissorsDisplay = document.getElementById('scissors')
const possibleResult = document.getElementById('result')
const possibleChoices = document.querySelectorAll('btn')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListner('click', (e) => {
   userChoice = e.target.id
    rockDisplay.innerHTML = userChoice
}));
