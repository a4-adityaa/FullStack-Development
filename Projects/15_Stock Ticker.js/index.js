import { getStockData } from "./faceStockAPI.js";

setInterval(function () {
    const stockData = getStockData();
    renderStockRicker(stockData);
}, 1500);

let prevPrice = null;

function renderStockRicker(stockData){
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    const { name, sym, price, time } = stockData

    const priceDirectionIcon = price > prevPrice ? '⬆️': price < prevPrice ? '⬇️' :'➡️'
    // stockDisplayPriceIcon.innerHTML =''
    stockDisplayPriceIcon.textContent = priceDirectionIcon

    stockDisplayName.innerHTML = name
    stockDisplaySymbol.innerHTML = sym
    stockDisplayPrice.innerHTML = price
    stockDisplayTime.innerHTML = time
    prevPrice = price
}