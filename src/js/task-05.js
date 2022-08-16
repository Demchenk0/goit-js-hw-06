// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".



let onInput = document.querySelector('#name-input');
let onOutput = document.querySelector('#name-output');

onInput.addEventListener('input', onFormInput);

function onFormInput(event) {
    console.log(event.target.value);
    if (event.target.value === '') {
        onOutput.textContent = 'Anonymous';
    } else {
        onOutput.textContent = event.target.value; 
    }
}