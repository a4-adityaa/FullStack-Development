
let data = [{player:"Jane", score:52}, {player:"mark", score:41}]

let buttonEl = document.getElementById("btn-el")

buttonEl.addEventListener("click", function(){
    console.log(data[0].score)
})