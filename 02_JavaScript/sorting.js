
let fruits = ["apple", "orange", "apple","apple","orange"]
let orange = []
let apple = []

for(let i = 0; i<fruits.length; i++){
    if(fruits[i] === "apple"){
        apple.push(fruits[i])
    }else{
        orange.push(fruits[i])
    }
}

console.log(orange)
console.log(apple)