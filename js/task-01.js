const categories = document.getElementById('categories');
const numbOfCategories = categories.children.length;
console.log(`Number of categories: ${numbOfCategories}`);

const items = document.querySelectorAll('.item');

items.forEach(element => { 
  const categoryName = element.firstElementChild.textContent;
  const elementsCount = element.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});


