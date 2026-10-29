
let images = ["person1.jpg", "person2.jpg","person3.jpeg"]

const imageEl = document.getElementById("img-tag")

function renderImg(){
    let imageList = ""
    for(let i=0; i<images.length; i++){
        imageList += `<img class="team-img" src="${images[i]}">`
    }
    imageEl.innerHTML = imageList
}

renderImg()