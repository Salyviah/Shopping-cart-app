//add items
let cart = []

function addItems(){
    let name = prompt("items name")
    let price = parseFloat(prompt("price of the item"))
    if(!isNaN(price) && price > 0){
        cart.push({name, price})
        console.log(`${name} has been  added to the cart at $${price.toFixed(2)}`)
    }else{
        console.log("invalid input")
    }
}
//view items here we will use for each
function viewTheCart(){
    if(cart.length === 0){
        console.log("cart is empty")
    }else{
        console.log("items in the cart")
        cart.forEach((index, item) =>{
            console.log(`${index + 1}. ${item.name} - $${item.price.toFix(2)} `)
        })
    }
}

//calculate the total price here we will use reduce method
function calculateTotal(){
    let total = cart.reduce((sum, item)=> sum + item.price, 0)
    console.log(`Total  $${total.toFixed(2)}`)
}
  //filter expensive itemes
function filterExpensiveItems (threshold){
    let expensiveItems = cart.filter(item => item.price > threshold)
    if(expensiveItems.length > threshold){
        console.log(`${item} is expensive`)
        expensiveItems.forEach(item =>
            console.log(`${item.name} - $${item.price.toFixed(2)}`)
        )   
    }else{
        console.log(`no items are expensive than $${threshold.toFixed(2)}`)
    }
}
