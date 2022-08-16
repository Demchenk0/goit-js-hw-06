const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const newUl = document.querySelector('#ingredients');

console.log(newUl);
// перебираем все елементы которые создали

const allIngredients = ingredients.map(el => {
  // создаем елемент (лишечку)
  const newLi = document.createElement("li");
  // название нашего елемента
  newLi.textContent = el;
  // создаем класс нашей лишке и возвращаем ее
  newLi.classList.add("item");
  return newLi;
});
// добавляем наши лишки
newUl.append(...allIngredients);

console.log(allIngredients);

// const newLi = document.createElement("li"); 
// newLi.textContent = "Potatoes";
// newUl.append(newLi);

