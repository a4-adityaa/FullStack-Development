

const totalPrice = '420.694235781'
const btn = document.getElementById("container")

btn.innerHTML =`<button id="btn-el">Buy $${Number(totalPrice).toFixed(2)}</button>`