const card = document.querySelector('p.card');
const itemList = document.querySelector('ul.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // Using className
  // console.log(itemList.className);
  // card.className = 'card dark';

  // Usisng classList
  // console.log(card.classList);
  // card.classList.add('dark');
  // card.classList.remove('card');
  // card.classList.toggle('dark');
  // card.classList.replace('card', 'dark');
  card.classList.toggle('hidden');

  // Change style
  // itemList.style.lineHeight = '3';
  items.forEach((item, index) => {
    item.style.color = index % 2 == 0 ? 'green' : 'red';
  });
}

document.querySelector('button').onclick = run;
