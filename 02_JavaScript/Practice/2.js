
let myCourse = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Creates a function that takes a single parameters, an array
// and logs all the items of the array to the console.
// Call the functions while passing in the myCourse as an arguement

function logsCourse(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

logsCourse(myCourse)