
import { studentArr } from "./reduceOn_objects.js";

function calculateAvg(studentArr){
    const sum = studentArr.reduce(function(total, currentStudent){
        return total + currentStudent.grade
    },0)
    return sum
}

console.log(calculateAvg(studentArr)/studentArr.length)