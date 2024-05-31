document.addEventListener('DOMContentLoaded', () => {
    initAdminPanel();
});

function initAdminPanel() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            renderProducts();
        });

    document.getElementById('add-product-btn').addEventListener('click', () => {
        openEditModal();
    });

    document.getElementById('edit-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const isEditing = document.getElementById('edit-id').value;
        if (isEditing) {
            updateProduct();
        } else {
            addNewProduct();
        }
    });

    document.getElementById('admin-products-list').addEventListener('click', (event) => {
        if (event.target.className === 'delete') {
            deleteProduct(event.target.dataset.id);
        } else if (event.target.className === 'edit') {
            openEditModal(event.target.dataset.id);
        }
    });

    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('edit-modal').style.display = 'none';
    });
}

function renderProducts() {
    const list = document.getElementById('admin-products-list');
    list.innerHTML = '';
    products.forEach(product => {
        const productHTML = `
            <div class="product-item" data-id="${product.id}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Цена: ${product.price}</p>
                <button class="edit" data-id="${product.id}">Редактировать</button>
                <button class="delete" data-id="${product.id}">Удалить</button>
            </div>
        `;
        list.innerHTML += productHTML;
    });
}

function openEditModal(productId = '') {
    const modal = document.getElementById('edit-modal');
    if (productId) {
        const product = products.find(p => p.id === productId);
        document.getElementById('edit-id').value = product.id;
        document.getElementById('edit-name').value = product.name;
        document.getElementById('edit-description').value = product.description;
        document.getElementById('edit-price').value = product.price;
    } else {
        document.getElementById('edit-id').value = '';
        document.getElementById('edit-name').value = '';
        document.getElementById('edit-description').value = '';
        document.getElementById('edit-price').value = '';
    }
    modal.style.display = 'block';
}

function addNewProduct() {
    const newProduct = {
        id: `prod-${Date.now()}`,
        name: document.getElementById('edit-name').value,
        description: document.getElementById('edit-description').value,
        price: document.getElementById('edit-price').value
    };
    products.push(newProduct);
    renderProducts();
    document.getElementById('edit-modal').style.display = 'none';
}

function updateProduct() {
    const id = document.getElementById('edit-id').value;
    const product = products.find(p => p.id === id);
    product.name = document.getElementById('edit-name').value;
    product.description = document.getElementById('edit-description').value;
    product.price = document.getElementById('edit-price').value;
    renderProducts();
    document.getElementById('edit-modal').style.display = 'none';
}

function deleteProduct(productId) {
    products = products.filter(p => p.id !== productId);
    renderProducts();
}
