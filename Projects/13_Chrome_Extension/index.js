
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    ulEl.innerHTML += "<li>" + inputEl.value + "</li>"
    inputEl.value = ""
})

// function renderLead(){
//     // for(let i=0; i< myLeads.length; i++){
//     //     listItems += "<li>" + myLeads[i] + "</li>"
//     //     // listItems = document.createElement("li") // creating an element
//     //     // li.textContent = myLeads[i]  // set text content
//     //     // ulEl.append(li)  //  append to ul
//     // }  ->> using loop we reassign our myleads every time a new element is created which slows performance
//     ulEl.innerHTML += listItem
// }

