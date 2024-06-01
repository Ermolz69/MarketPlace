document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
});

function fetchProducts() {
    const products = [
        { id: 1, name: "Ноутбук", price: "50000 руб.", description: "Высокопроизводительный ноутбук" },
        { id: 2, name: "Клавиатура", price: "7000 руб.", description: "Механическая клавиатура" }
    ];

    const tbody = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    products.forEach(product => {
        let row = tbody.insertRow();
        row.insertCell(0).textContent = product.name;
        row.insertCell(1).textContent = product.price;
        row.insertCell(2).textContent = product.description;
        let actionCell = row.insertCell(3);

        let acceptBtn = document.createElement('button');
        acceptBtn.textContent = 'Принять';
        acceptBtn.className = 'accept';
        acceptBtn.onclick = function() { acceptProduct(product.id); };
        actionCell.appendChild(acceptBtn);

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Редактировать';
        editBtn.className = 'edit';
        editBtn.onclick = function() { editProduct(product.id); };
        actionCell.appendChild(editBtn);

        let declineBtn = document.createElement('button');
        declineBtn.textContent = 'Отклонить';
        declineBtn.className = 'decline';
        declineBtn.onclick = function() { declineProduct(product.id); };
        actionCell.appendChild(declineBtn);
    });
}

function acceptProduct(productId) {
    console.log('Продукт принят:', productId);
}

function editProduct(productId) {
    console.log('Редактирование продукта:', productId);
}

function declineProduct(productId) {
    console.log('Отклонение продукта:', productId);
}
