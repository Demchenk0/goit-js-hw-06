// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const liItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${liItem.length}`);
// console.log(liItem);

liItem.forEach((item) => {
    console.log(`Category:`, item.querySelector('h2').textContent);
    console.log(`Elements:`, item.querySelectorAll('li').length);
});