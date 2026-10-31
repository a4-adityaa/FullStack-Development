// .every() : checks every elements of the array 

const daikyStepsArr = [10000, 12000, 18000, 15000, 11000, 19000, 13000]

// every(): returns true if every item passes the text
const areAllOver10k = daikyStepsArr.every(function(dailySteps){
    return dailySteps >= 10000
})

console.log(areAllOver10k)