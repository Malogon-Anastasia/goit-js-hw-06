const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listItems = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  return itemRef;
});

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...listItems);