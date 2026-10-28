

// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epicleads.com")
// console.log(myLeads)

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadfromlocakStorage = JSON.parse(localStorage.getItem("myLeads"))

// checks for truthy and falsey value
if(leadfromlocakStorage){
    myLeads = leadfromlocakStorage

    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
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
