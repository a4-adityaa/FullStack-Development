
const distanceTravelMiles = [267, 345, 234, 190, 299]

// const distanceTravelKm = distanceTravelMiles.map(function(distance){
//     return Math.round(distance * 1.6)
// })

const distanceTravelKm = distanceTravelMiles.map(distance => Math.round(distance * 1.6))

console.log(distanceTravelKm)