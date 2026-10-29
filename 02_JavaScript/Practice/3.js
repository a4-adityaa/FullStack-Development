// create a function that takes two parameters (i.e description and an array) and should a string based on the decription and array

function generateSentance(desc, arr){
    let list = []
    for(let i=0; i<arr.length; i++){
        list.push(arr[i])
    }
    console.log(desc + list.join(", ")) // joins provide ability to add something btwn array elements
}

const description = "The three largest countries are: "
const array = ["China", "India","USA"]

generateSentance(description, array)