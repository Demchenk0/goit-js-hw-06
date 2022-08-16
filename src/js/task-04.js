// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');

buttonDec.addEventListener("click", onButtonDecrementClick);
buttonInc.addEventListener("click", onButtonIncrementClick);

let counterValue = 0;

function onButtonDecrementClick() {
    counterValue -= 1;
    span.textContent = counterValue;
}

function onButtonIncrementClick() {
    counterValue += 1;
    span.textContent = counterValue;
}

