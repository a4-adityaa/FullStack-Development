
let hands = ["rock", "paper", "scissors"]

function randomHand(){
    let randomIdx = Math.floor(Math.random()*hands.length)
    console.log(hands[randomIdx])
}

randomHand()