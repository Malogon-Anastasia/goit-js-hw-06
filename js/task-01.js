const categoriesRef = document.querySelector('#categories');
const categoriesItems = categoriesRef.children;
const categoriesItemsQuantity = categoriesItems.length;
console.log(`Number of categories: ${categoriesItemsQuantity}.`);


const items = Array.from(categoriesItems);
items.forEach(item => {
  console.log(` Category:  ${item.querySelector('h2').textContent}.`);
  console.log(`Elements: ${item.querySelector('ul').children.length}`);
});