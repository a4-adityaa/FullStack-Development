
const inoviceUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

// .findIndex(): gives the index of first Item that passes the test (if noe one pass returns -1)
const inovicInxeOver1k = inoviceUSDArr.findIndex(function(inovice){
    return inovice > 1000
})

// console.log(inovicInxeOver1k)


// .at(): can also traverse on negative numbers(i.e from bacwards)
console.log(inoviceUSDArr.at(-1))