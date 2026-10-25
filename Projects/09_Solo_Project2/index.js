
let homeEl = document.getElementById("home-el")

function add1(){
    let one = Number(homeEl.textContent) + 1
    homeEl.textContent = one
}

function add2(){
    let two = Number(homeEl.textContent) + 2
    homeEl.textContent = two
}

function add3(){
    let three = Number(homeEl.textContent)+3
    homeEl.textContent = three
}


let guestEl = document.getElementById("guest-el")
function addGuest1(){
    let one = Number(guestEl.textContent) + 1
    guestEl.textContent = one
}

function addGuest2(){
    let two = Number(guestEl.textContent) + 2
    guestEl.textContent = two
}

function addGuest3(){
    let three = Number(guestEl.textContent)+3
    guestEl.textContent = three
}