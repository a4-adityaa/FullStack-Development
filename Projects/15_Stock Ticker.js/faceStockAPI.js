
export function getStockData(){
    return {
        name: 'TechAI',
        sym: 'QTA',
        price: (Math.random()*3).toFixed(2),
        time: new Date().toLocaleTimeString()
    }
}

// const newdata = getStockData()
// console.log(newdata)