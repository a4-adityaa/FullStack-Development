import { itemsBoughtArr } from "./inlineArrowRrfactor.js"

function calculateTotalCost(itemsBoughtArr){
    const total = itemsBoughtArr.reduce((total, current)=>
    total + current.priceUSD, 0
    )
    return total 
}

console.log(calculateTotalCost(itemsBoughtArr))