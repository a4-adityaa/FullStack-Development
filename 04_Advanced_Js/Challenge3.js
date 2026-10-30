
function logAnswer(name, pts){
    console.log(`The answer is ${name} ofcourse! If you got that right, give yourself ${pts} Points.`)
}

setTimeout(logAnswer, 3000, 'Delhi',10)
console.log('What is the capital of India?')
