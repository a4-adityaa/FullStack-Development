
const rainJanuaryByWeek = [10, 20, 0, 122]

const totalRainfallJnauary = rainJanuaryByWeek.reduce(function(total, currentElement){
    return total + currentElement
})

console.log(totalRainfallJnauary)