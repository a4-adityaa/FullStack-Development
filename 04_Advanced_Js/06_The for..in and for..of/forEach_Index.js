

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

characters.forEach(function(character, index){
    console.log(index, character.title)
})