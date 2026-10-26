
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function(){
    let randomIdx1 = Math.floor(Math.random()*fighters.length)
    let randomIdx2 = Math.floor(Math.random()*fighters.length)

    stageEl.textContent = fighters[randomIdx1] +" VS " + fighters[randomIdx2]
})