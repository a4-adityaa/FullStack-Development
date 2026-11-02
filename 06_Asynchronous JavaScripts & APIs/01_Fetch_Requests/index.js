
fetch('https://dog.ceo/api/breeds/image/random')
    .then(Response => Response.json())
    .then(data => {
        const imageElement = document.createElement('img')
        imageElement.src = data.message
        imageElement.alt = 'random dog picture'
        document.getElementById('img-container').appendChild(imageElement)
    })