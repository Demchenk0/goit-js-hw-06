// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const myButton = document.querySelector('.change-color');
const mySpan = document.querySelector('.color');
const myBody = document.querySelector('body');

// myButton.addEventListener('click', onEditSpan);

// function onEditSpan(event) {
//   myBody.style.backgroundColor = getRandomHexColor();
//   mySpan.textContent = getRandomHexColor();

// }

myButton.addEventListener('click', (event) => {
  myBody.style.backgroundColor = getRandomHexColor();
  mySpan.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(event);

