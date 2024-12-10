let inventory = {
    items: [],
    maxSize: 10,
    gold: 0
};

// Örnek envanter öğeleri
const sampleItems = [
    {
        id: 1,
        name: "Şifa İksiri",
        type: "potions",
        quantity: 2,
        image: "images/health-potion.jpg"
    },
    {
        id: 2,
        name: "Mavi Kristal",
        type: "materials",
        quantity: 3,
        image: "images/crystal.jpg"
    }
];

function loadInventory() {
    // Local storage'dan envanter verilerini yükle
    const savedInventory = localStorage.getItem('gameInventory');
    if (savedInventory) {
        inventory = JSON.parse(savedInventory);
    } else {
        // Örnek verileri yükle
        inventory.items = sampleItems;
        saveInventory();
    }
    updateInventoryDisplay();
}

function updateInventoryDisplay(category = 'all') {
    const inventoryContainer = document.getElementById('inventory-items');
    const items = category === 'all' 
        ? inventory.items 
        : inventory.items.filter(item => item.type === category);
    
    inventoryContainer.innerHTML = '';
    
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'inventory-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-name">${item.name}</div>
            <div class="item-quantity">Adet: ${item.quantity}</div>
        `;
        inventoryContainer.appendChild(itemElement);
    });

    // Stats güncelleme
    document.getElementById('inventory-gold').textContent = inventory.gold;
    document.getElementById('inventory-capacity').textContent = 
        `${inventory.items.length}/${inventory.maxSize}`;
}

function saveInventory() {
    localStorage.setItem('gameInventory', JSON.stringify(inventory));
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadInventory();
    
    // Kategori butonları için event listener
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateInventoryDisplay(button.dataset.category);
        });
    });
}); 