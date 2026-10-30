

function logAnswer(name, pts){
    console.log(`The answer is ${name} ofcourse! If you got that right, give yourself ${pts} Points.`)
}

const questionTimer= setTimeout(logAnswer, 3000, 'Delhi',10)

const stopEl = document.getElementById('stop')

stopEl.addEventListener('click', function(){
    clearTimeout(questionTimer)
    console.log('Cancelling....')
})
