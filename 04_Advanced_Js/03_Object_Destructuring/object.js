// Object Destructuring enables us to extract properties from objects into distinct variables.

const favouriteFilm = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: 'action',
    star: 'Tom cruise'
}

const {title, year, director, genre, star} = favouriteFilm

// const title = favouriteFilm.title
// const director = favouriteFilm.director
// const year = favouriteFilm.year
// const genre = favouriteFilm.genre
// const star = favouriteFilm.star

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film directed by ${director} and released in ${year}.`)