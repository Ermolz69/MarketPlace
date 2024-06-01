document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
    fetchOrders();
});

// Списка товаров продавца
function fetchProducts() {
    const products = [
        { id: 1, name: "Ноутбук", description: "Высокопроизводительный ноутбук", price: 50000 },
        { id: 2, name: "Клавиатура", description: "Механическая клавиатура", price: 7000 }
    ];

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - ${product.price} руб. - Описание: ${product.description}`;
        productList.appendChild(listItem);
    });
}

// Список заказов продавца
function fetchOrders() {
    const orders = [
        { id: 1, product: "Ноутбук", quantity: 2, status: "Обработан" },
        { id: 2, product: "Клавиатура", quantity: 1, status: "В ожидании" }
    ];

    const orderList = document.getElementById('order-list');
    orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.textContent = `Продукт: ${order.product}, Количество: ${order.quantity}, Статус: ${order.status}`;
        orderList.appendChild(listItem);
    });
}
