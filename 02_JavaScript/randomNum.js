
// let randomNumber = Math.floor(Math.random() *6)

// console.log(randomNumber)

function rollDice(){
    let randomDice = Math.floor(Math.random()*6) + 1
    return randomDice
}

let randomNum = rollDice()
console.log(randomNum)