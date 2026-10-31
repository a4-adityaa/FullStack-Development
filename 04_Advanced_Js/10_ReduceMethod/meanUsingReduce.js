
const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

const meanMarks = grades.reduce(function(totalMarks , currentMarks){
    return totalMarks + currentMarks
})

console.log(`The average of grades is ${meanMarks/grades.length}`)