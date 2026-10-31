

const daikyStepsArr = [10000, 12000, 18000, 1000, 11000, 2000, 13000]

// some(): returns true if some of it's item passes the text (one or more items)
const areSomeOver10k = daikyStepsArr.some(function(dailySteps){
    return dailySteps >= 10000
})

console.log(areSomeOver10k)