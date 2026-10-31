
const inoviceUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

// .find(): gives the value of first Item that passes the test (if noe one pass returns undefined)
const inoviceOver1k = inoviceUSDArr.find(function(inovice){
    return inovice > 1000
})

console.log(inoviceOver1k)