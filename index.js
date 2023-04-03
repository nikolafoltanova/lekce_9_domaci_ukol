// ukol 1
let car = document.getElementById("car");
document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        car.style.marginLeft = (parseInt(car.style.marginLeft || 0) + 10) + "px";
    }
    if (event.key == "ArrowLeft") {
        car.style.marginLeft = (parseInt(car.style.marginLeft || 0) - 10) + "px";
    }
});

// ukol 2
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

// ukol 3 - newsletter pokračování z lekce
var form2 = document.querySelector('form')
var border = document.querySelector('#subscribe')
border.addEventListener("input", function() {
    // použití metody trim() slouží k odstranění prázdných znaků na začátku a na konci aby nedošlo k tomu, že uživatel napíše několik mezer
    // pokud indexOf() nenalezne zavináče, tak vrátí -1 a proto podmínka, že se přidá border pokud indexOf === -1
    if (border.value.trim()==="" || border.value.indexOf("@") === -1) {
        border.classList.add("border")
    } else {
        border.classList.remove("border")
    }
})

const subscribe = (event) => {
	event.preventDefault()
	var input = document.querySelector('input')
	var email = input.value
	form2.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

form2.addEventListener('submit', subscribe)
