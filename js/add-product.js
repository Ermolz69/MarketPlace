document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const shortDescription = document.getElementById('product-short-description').value;
    const fullDescription = document.getElementById('product-full-description').value;
    const price = document.getElementById('product-price').value;
    const category = document.getElementById('product-category').value;

    console.log('Добавлен новый товар:', {
        productName,
        shortDescription,
        fullDescription,
        price,
        category
    });

    alert('Товар успешно добавлен на рассмотрение!');
});
