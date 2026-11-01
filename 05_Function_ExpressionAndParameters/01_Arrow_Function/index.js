
// const getSpendAlert = function(amount){
//     return `Warning! You just spent ${amount}`
// }

// in arrow fctn if we have one parameters, don't need a bracket and in all cases you needed a bracket including 0 parameter
const getSpendAlert = amount => {
    return `Warning! You just spent ${amount}`
}

const getSpendAlert1 = amount => `Warning! You just spent ${amount}` // no need to return, it will auto

console.log(getSpendAlert(150))