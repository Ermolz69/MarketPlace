document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Заглушка
    console.log('Данные для входа:', { email, password });
    if (email === "example@example.com" && password === "password") {
        alert('Вход выполнен успешно!');
    } else {
        alert('Неправильный email или пароль. Попробуйте снова.');
    }


});
