
async function getSuggestion(){
    const Response = await fetch('https://apis.scrimba.com/bored/api/activity')
    const data = await Response.json()
    console.log(data) 
}

getSuggestion()