
function selectItem(items){
    let price = 0

    switch(items){
        case 'coffee':
            price = 2
            break
        case 'Sandwiches':
            price = 5
            break
        case 'Salad':
            price = 4
            break
        case 'Lemon cake':
            price = 3
        default:
            return `We don't sell ${items}`    
    }
    return `You selected ${items}. That will be of $${price}.`
}

console.log(selectItem('Biscuits'))