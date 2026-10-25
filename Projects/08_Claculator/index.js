
let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add(){
    let sum = num1 + num2
    sumEl.textContent = "sum: "+ sum
    // sumEl.textContent += 
}

function subtract(){
    let subtract = num1 - num2
    sumEl.textContent = "Diffrence: " +subtract
}

function multiply(){
    let multiply = num1 * num2
    sumEl.textContent = "Product: "+multiply
}

function divide(){
    let divide = num1 / num2
    sumEl.textContent ="Dividend: "+ divide
}