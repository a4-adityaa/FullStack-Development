

try{
    const Response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    if(!Response.ok){
        throw new Error('There is a problem with the API')
    }
    const data = await Response.json()
    console.log(data) 
} catch(err){
    console.log('Something went wrong: ', err.message)

}finally{console.log('The operation is completed!')}