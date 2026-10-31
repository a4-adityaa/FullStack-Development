
const series = [
    {
        name: 'The wire',
        location: 'Baltimore',
        lengthInHours: 60,
        genre: ['action', 'thriller', 'detective','Suspense']
    },
    {
        name: 'Game of Thrones',
        location: 'Westros and Essos',
        lengthInHours: 70.25,
        genre: ['Fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours: 85,
        genre: ['Comedy', 'romance', 'Drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours: 131,
        genre: ['Zombie', 'Apocalypse','thriller','suspense']
    },
    {
        name: 'The Big Band Theory',
        location: 'Pasadena',
        lengthInHours: 139.66,
        genre: ['Comedy','nerd','romance']
    }
]

const newYorkSeries = series.filter(function(show){
    return show.location === 'New York'
})

const thrillerSeries = series.filter(function(show){
    return show.genre.includes('Comedy')
})

// console.log(newYorkSeries)
console.log(thrillerSeries)