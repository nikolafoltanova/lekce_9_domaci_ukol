let car = document.getElementById("car");
document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        car.style.marginLeft = (parseInt(car.style.marginLeft || 0) + 10) + "px";
    }
    if (event.key == "ArrowLeft") {
        car.style.marginLeft = (parseInt(car.style.marginLeft || 0) - 10) + "px";
    }
});

const user = {
    email: "bartolomej.rozumbrada@gmail.com",
    password: "vimzenicnevim",
    name: "Bartoloměj"
};

const form = document.querySelector('form');
const messageDiv = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === user.email && password === user.password) {
        form.style.display = 'none';
        messageDiv.innerText = `Přihlášený uživatel: ${user.name}`;
    } else {
        messageDiv.innerText = 'Neplatné přihlašovací údaje';
        passwordInput.value = '';
    }
});