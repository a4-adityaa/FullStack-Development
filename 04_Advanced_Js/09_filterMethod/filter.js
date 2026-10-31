
const ages = [8,12,34,45]

const adults = ages.filter(function(age){
    if(age >=18){
        return true
    }
})

console.log(adults)

const childrens = ages.filter(function(age){
    return age < 18
})
console.log(childrens)