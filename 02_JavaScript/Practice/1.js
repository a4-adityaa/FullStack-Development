
const player = "Aadi"
const opponent = "Ankit"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// playing the game 
points += 100
hasWon = true

// Announcment the winner
if (hasWon){
    console.log(`${player} got ${points} points and won the ${game} game!`)
}else{
    console.log(`"The winner is ${opponent}! ${player} lost the game`)
}

// change wheather variable should be const or let
// change console.log to template strings