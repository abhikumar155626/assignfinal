// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from local storage
    const menuData = JSON.parse(localStorage.getItem('menuData')) || [];

    // Get the container where menu cards will be placed
    const menuContainer = document.getElementById('menu-container');

    // Create menu cards for each item in the data
    menuData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        
        card.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;

        menuContainer.appendChild(card);
    });
});
