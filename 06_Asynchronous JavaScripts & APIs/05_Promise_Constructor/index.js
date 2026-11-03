
const promise = new Promise ((resolve, reject) => {
    const success = Math.random() > 0.5
    if(success){
        resolve('Operation Successful')
    }else{
        reject('Operation Rejected')
    }
})

promise.then(response => console.log(response))
.catch(error => console.log(error));