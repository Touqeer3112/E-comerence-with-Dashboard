const icons = document.querySelectorAll('.cart-btn'); 
icons.forEach(function(icon) {
    icon.addEventListener('click', function () {
       
        const productCard = icon.closest('.box');
        
       
        const productName = productCard.querySelector('.content h3').textContent; 
        const productPrice = productCard.querySelector('.price').textContent;
        const productImage = productCard.querySelector('img').src;
        
       
        const product = {
            name: productName, 
            price: productPrice, 
            image: productImage
        };
        let cart = JSON.parse(localStorage.getItem('cart')) || []; 
        
        cart.push(product);

      
        localStorage.setItem('cart', JSON.stringify(cart)); 
        alert(`${productName} has been added to your cart!`);

        const profileLink = document.createElement('a');
        profileLink.href = 'profile.html';  
        profileLink.textContent = 'Go to My Profile';
        profileLink.style.display = 'block';
        profileLink.style.marginTop = '10px';
        profileLink.style.color = '#000';
        profileLink.style.textDecoration = 'none';

       
        document.body.appendChild(profileLink);

      
        // window.location.href = 'profile.html';
    });
});



// let productQuantities = {};

// // Function to increase quantity
// function increaseQuantity(productId) {
//     if (productQuantities[productId]) {
//         productQuantities[productId]++;
//     } else {
//         productQuantities[productId] = 1;
//     }
//     updateQuantityDisplay(productId);
// }

// // Function to decrease quantity
// function decreaseQuantity(productId) {
//     if (productQuantities[productId] && productQuantities[productId] > 1) {
//         productQuantities[productId]--;
//     }
//     updateQuantityDisplay(productId);
// }

// // Update quantity display on the page
// function updateQuantityDisplay(productId) {
//     const quantityDisplay = document.getElementById(`quantity-${productId}`);
//     if (quantityDisplay) {
//         quantityDisplay.textContent = productQuantities[productId] || 1;
//     }
// }

// // Function to handle adding item to cart
// function addToCart(productId) {
//     alert(`Product ${productId} added to cart with quantity: ${productQuantities[productId] || 1}`);
//     // Here you can implement your cart logic (e.g., store in localStorage or database)
// }


