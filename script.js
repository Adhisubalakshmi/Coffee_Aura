let cart = [];
let total = 0;

function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("show");
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
                <button onclick="removeItem(${index})">x</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
    document.getElementById("cartCount").innerText = cart.length;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    alert("✅ Order placed successfully!\nTotal: ₹" + total);
    cart = [];
    updateCart();
    toggleCart();
}
