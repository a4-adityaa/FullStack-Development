

const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression']
    },
    {
        title: 'sorcerer',
        emoji: '🧝‍♀️',
        powers: ['magic', 'invisbility', 'necromacy']
    },
    {
        title: 'ogre',
        emoji: '🦁',
        powers: ['power', 'stamina', 'shapeshifting']
    },
    {
        title: 'unicorn',
        emoji: '🦄',
        powers: ['speed', 'healing', 'flight']
    }
]

// for (let character of characters){
//     console.log(character)
// }

// for.each works as for..of (loop)
characters.forEach(function(character){
    // console.log(character.title)
    character.powers.forEach(function(power){
        console.log(power)
    })
})