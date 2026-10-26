
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let cardEl = document.getElementById("card-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")

let player = {name: "Aadi", chips: 145 }
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $" + player.chips

function getRandomCard(){
    let generatedNum = Math.floor(Math.random()*13)+1
    if (generatedNum === 1){
        return 11
    }
    if(generatedNum > 10){
        return 10
    }
    return generatedNum
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]  
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if( sum === 21){
        message = "You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false 
    }
    messageEl.textContent = message
    sumEl.textContent = "sum: "+ sum
    cardEl.textContent = "cards: "+ " "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
}

function newCard(){
    if(isAlive === true && hasBlackJack == false){
        let newcard = getRandomCard()
        sum += newcard
        cards.push(newcard)
        renderGame()
    }
}