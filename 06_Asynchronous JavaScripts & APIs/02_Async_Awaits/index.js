

// await function wait krta hai, jabtk data api se mil na jaye ya koi response na aaye but, without it, fetch function ko pura exexcute kiye function execute krta hai, and data baad me aati hai
async function getSuggestion(){
    const Response = await fetch('https://apis.scrimba.com/bored/api/activity')
    const data = await Response.json()
    console.log(data) 
}

getSuggestion()