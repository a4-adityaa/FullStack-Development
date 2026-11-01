
// function speedWarning(speed){
//     return `You are going at ${speed} mph!`
// }

const limit = speedWarning => `You are going at ${speedWarning} mph!` 

const speedLimit = (speed, actuaSpeed) => {
    if(speed > actuaSpeed) {
        return `You're going at ${speed} mph!`
    }
}

// console.log(limit(40))
console.log(speedLimit(40,30))