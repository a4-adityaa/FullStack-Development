
let passEl_1 = document.getElementById("pass-1")
let passEl_2 = document.getElementById("pass-2")

const chars = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z",

    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z",

    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

    "!", "@", "#", "$", "%", "&", "*", "-", "_", "+", "?"
]

function password() {
    randomPass = " "
    for(let i =0; i<15; i++){
        let randomChar = Math.floor(Math.random()*chars.length)
        randomPass += chars[randomChar]
    }
    return randomPass
}

function randomPassword(){
    passEl_1.textContent = password()
    passEl_2.textContent = password()
}

function copyPassword(num){
    if (num ===1){
        navigator.clipboard.writeText(passEl_1.textContent)
    }else{
        navigator.clipboard.writeText(passEl_2.textContent)
    }
}