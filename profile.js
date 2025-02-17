document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');
    const popup = document.getElementById('checkout-popup');
    const closeBtn = document.querySelector('.close-btn');
    const checkoutForm = document.getElementById('checkout-form');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="100">
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
            `;

            cartItemsContainer.appendChild(productDiv);
        });
    }

    checkoutBtn.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const zipcode = document.getElementById('zipcode').value;

        if (address && city && zipcode) {
            alert('Your order is confirmed thanks you for visit');
            localStorage.removeItem('cart');
            window.location.href = 'website.html';
        } else {
            alert('Please fill out all fields.');
        }
    });

    document.getElementById('logout-btn').addEventListener('click', function () {
        localStorage.removeItem('cart');
        alert('You have logged out successfully!');
        window.location.href = 'index.html';
    });
});