document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    console.log('Регистрационные данные:', { username, email, password, role });

    // Заглушка
    alert(`Регистрация успешна! Имя пользователя: ${username}, Роль: ${role}`);
});
