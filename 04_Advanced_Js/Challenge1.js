// creating a game that guess correct answer.

const playerGuess = Math.floor(Math.random()*10)+1
const correctAnswer = 6
const anotherChance = 4

const message = playerGuess === correctAnswer || playerGuess === anotherChance ? 'Correct!' : 'Wrong'

console.log(`PlayerGuess is:${playerGuess}`)
console.log(message)