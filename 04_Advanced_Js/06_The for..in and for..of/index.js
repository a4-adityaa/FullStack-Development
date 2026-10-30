
const character1 = {
    title: 'Ninja',
    emoji: '🥷',
    power: ['agility', 'stealth', 'aggression']
}

// for..in  works on key/properties type items like objects 
for (const property in character1){
    console.log(character1[property])
}

// for..in works on arrays and string (non-key value plairs)
const character = 'ninja'

for (const letter of character){
    console.log(letter)
}