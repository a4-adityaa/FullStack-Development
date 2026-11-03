
try{
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'Holiday Nightmare',
            body: 'When i was kidnapped in scotland',
            userId: 100
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
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