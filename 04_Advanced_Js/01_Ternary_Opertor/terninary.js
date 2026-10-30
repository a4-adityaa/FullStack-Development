
const exerciseTimeMins = 40

// let msg = ''

// if(exerciseTimeMins < 30){
//     msg = 'You need to try harder!'
// } else if(exerciseTimeMins < 60){
//     msg = 'Doing great!'
// }else{
//     msg = 'Excellent!'
// }

const message = exerciseTimeMins < 30 ? 'You need to try harder!' : exerciseTimeMins < 60 ? 'Doing Great!' : 'Excellent!' 

console.log(message)