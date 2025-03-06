// Скрипт за отваряне и затваряне на попъпа
document.getElementById('phone-icon').onclick = function() {
    document.getElementById('phone-number-popup').style.display = 'block';
};

document.getElementById('close-popup').onclick = function() {
    document.getElementById('phone-number-popup').style.display = 'none';
};

// Затваряне на попъпа при клик извън него
window.onclick = function(event) {
    if (event.target == document.getElementById('phone-number-popup')) {
        document.getElementById('phone-number-popup').style.display = 'none';
    }
};

let cart = []; // Празен масив за продуктите в кошницата

// Добавяне на продукт в кошницата
function addToCart(product) {
    cart.push(product);
    updateCartCount();
    displayCartItems();
}

// Актуализира брояча на продуктите в кошницата
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Показва продуктите в модала на кошницата
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Изчиства старите продукти

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.name} - ${item.price} лв.</p>
            <button onclick="removeFromCart(${index})">Премахни</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Премахване на продукт от кошницата
function removeFromCart(index) {
    cart.splice(index, 1); // Премахва продукта по индекса
    updateCartCount();
    displayCartItems();
}

// Отваряне и затваряне на модала за кошницата
document.querySelector('.cart-icon').onclick = function() {
    document.getElementById('cart-popup').style.display = 'block';
};

document.getElementById('close-cart').onclick = function() {
    document.getElementById('cart-popup').style.display = 'none';
};

// Пример за продукт, който можем да добавим
addToCart({ name: 'Продукт 1', price: 50 });
addToCart({ name: 'Продукт 2', price: 100 });
