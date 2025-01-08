//add items
let cart = [];

document.getElementById("add-item-btn").addEventListener("click", addItems);
document.getElementById("view-cart-btn").addEventListener("click", viewTheCart);
document.getElementById("total-btn").addEventListener("click", calculateTotal);

function addItems() {
    let name = prompt("Enter the item's name:");
    let price = parseFloat(prompt("Enter the price of the item:"));
    if (!isNaN(price) && price > 0) {
        cart.push({ name, price });
        alert(`${name} has been added to the cart at $${price.toFixed(2)}.`);
    } else {
        alert("Invalid input. Please enter aH valid price.");
    }
}

// View items in the cart
function viewTheCart() {
    const cartDiv = document.getElementById("cart-items");
    cartDiv.innerHTML = ""; // Clear previous content

    if (cart.length === 0) {
        cartDiv.textContent = "The cart is empty.";
    } else {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.textContent = `${index + 1}. ${item.name} - $${item.price.toFixed(2)}`;
            cartDiv.appendChild(itemDiv);
        });
    }
}

// Calculate the total price
function calculateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const cartDiv = document.getElementById("cart-total");
    cartDiv.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Filter expensive items
function filterExpensiveItems(threshold) {
    let expensiveItems = cart.filter(item => item.price > threshold);

    if (expensiveItems.length > 0) {
        let message = "Expensive items:\n";
        expensiveItems.forEach(item => {
            message += `${item.name} - $${item.price.toFixed(2)}\n`;
        });
        alert(message);
    } else {
        alert(`No items are more expensive than $${threshold.toFixed(2)}.`);
    }
}
