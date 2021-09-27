const categoriesRef = document.querySelector('#categories');
const categoriesItems = categoriesRef.children;
const categoriesItemsQuantity = categoriesItems.length;
console.log(`В списке ${categoriesItemsQuantity} категории.`);


const items = Array.from(categoriesItems);
items.forEach(item => {
  console.log(` Категория: ${item.querySelector('h2').textContent}.`);
  console.log(`Количество элементов: ${item.querySelector('ul').children.length}`);
});