// 1 meter = 3.281 feet
// 1 litre = 0.264 gallon
// 1kg = 2.204 founds


const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-el")

btnEl.addEventListener("click", function(){
    let dataFromInput = Number(inputEl.value)
    lengthEl.textContent = `${dataFromInput} meters = ${dataFromInput*3.37} feet | ${dataFromInput} feet = ${(dataFromInput/0.305).toFixed(2)} meters`

    volumeEl.textContent = `${dataFromInput} liters = ${(dataFromInput*0.264).toFixed(2)}gallons | ${dataFromInput} gallons = ${dataFromInput*3.785} litres`

    massEl.textContent = `${dataFromInput} kiols = ${(dataFromInput*2.205).toFixed(2)} pounds | ${dataFromInput} pounds = ${dataFromInput*0.454} kilos`
})