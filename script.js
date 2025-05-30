document.addEventListener('DOMContentLoaded', () => {
    // Catalog Filter
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');
    const priceValue = document.getElementById('price-value');
    const products = document.querySelectorAll('.product');

    if (brandFilter && priceFilter) {
        // Initialize price display
        if (priceValue) {
            priceValue.textContent = new Intl.NumberFormat('ru-RU').format(priceFilter.value);
        }

        brandFilter.addEventListener('change', filterProducts);
        priceFilter.addEventListener('input', () => {
            if (priceValue) {
                priceValue.textContent = new Intl.NumberFormat('ru-RU').format(priceFilter.value);
            }
            filterProducts();
        });

        function filterProducts() {
            const brand = brandFilter.value;
            const maxPrice = parseInt(priceFilter.value);

            products.forEach(product => {
                const productBrand = product.getAttribute('data-brand');
                const productPrice = parseInt(product.getAttribute('data-price'));

                const brandMatch = brand === 'all' || productBrand === brand;
                const priceMatch = productPrice <= maxPrice;

                product.style.display = brandMatch && priceMatch ? 'block' : 'none';
            });
        }
    }
});

function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
}