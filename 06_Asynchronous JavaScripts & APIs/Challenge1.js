
try{
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    if(!response.ok){
        throw new Error('You encountered an error')
    }
    const data = await response.json()
    console.log(data)
}catch(err){
    console.log('Something went wrong: ', err.message)
}finally{
    console.log('The opertaion is completed!')
}