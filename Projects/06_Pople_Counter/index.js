
let count = 0

let countE1 = document.getElementById("count-el")

function increment(){
    count = count + 1
    countE1.innerText = count
}

function save(){
    console.log(count)
}