document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.querySelector('.container');
    formContainer.style.opacity = 0;
    window.setTimeout(() => {
        formContainer.style.transition = 'opacity 1s';
        formContainer.style.opacity = 1;
    }, 100);

    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.05)';
            input.style.transition = 'transform 0.3s ease';
        });
        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
        });
    });

    const form = document.getElementById('add-product-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const button = form.querySelector('button');
        button.innerHTML = 'Добавляется...';
        button.style.backgroundColor = '#27ae60';

        window.setTimeout(() => {
            button.innerHTML = 'Добавлено!';
            clearFormInputs();
            window.setTimeout(() => {
                button.innerHTML = 'Добавить';
                button.style.backgroundColor = '#2c3e50';
            }, 2000);
        }, 1000);
    });

    function clearFormInputs() {
        inputs.forEach(input => {
            if (input.type !== 'button' && input.type !== 'submit') {
                input.value = '';
            }
        });
        document.querySelectorAll('select').forEach(select => {
            select.selectedIndex = 0;
        });
    }
});
