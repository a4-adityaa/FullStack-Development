
let count = 0

let countE1 = document.getElementById("count-el")

function increment(){
    count += 1
    countE1.innerText = count
}


let saveEl = document.getElementById("save-el")

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countE1.innerText = 0
    // console.log(count)
}