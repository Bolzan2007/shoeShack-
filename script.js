function toggleCart() {
    var cart = document.getElementById('cart');
    if (cart.style.display === 'block') {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    var cart = [];

    function toggleCart() {
        var cartElement = document.getElementById('cart');
        cartElement.style.display = cartElement.style.display === 'block' ? 'none' : 'block';
    }

    function addToCart(productId) {
        const productElement = document.querySelector(`.product-description[data-id='${productId}']`);
        const productName = productElement.getAttribute('data-name');
        const productPrice = productElement.getAttribute('data-price');

        const product = { id: productId, name: productName, price: parseFloat(productPrice) };
        cart.push(product);
        updateCartDisplay();
    }

    function removeFromCart(productId) {
        cart = cart.filter(product => product.id !== productId);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items');
        const emptyCartMessage = document.getElementById('empty-cart-message');

        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
        } else {
            emptyCartMessage.style.display = 'none';
            cart.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'cart-item';
                productElement.innerHTML = `
                    <p>${product.name} - R$ ${product.price.toFixed(2)}</p>
                    <button onclick="removeFromCart(${product.id})">Remover</button>
                `;
                cartItemsContainer.appendChild(productElement);
            });
        }
    }

    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.toggleCart = toggleCart;
});
