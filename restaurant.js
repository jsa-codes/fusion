const { mongerInventory } = require('./fishMonger.js');

const fishForRestaurant = mongerInventory();

const fishForMenu = () => {
  let menuItems = [];
  for (const fish of fishForRestaurant) {
    if (fish.price <= 5) {
      menuItems.push(fish);
    }
  }
  return menuItems;
};

const fishMenu = (menuItems) => {
  let menuHTML = '';
  for (const item of menuItems) {
    menuHTML += `<h1>Menu
    <article class="menu">
        <h2>${item}</h2>
        <section class="menu__item">${item} Soup</section>
        <section class="menu__item">${item} Sandwich</section>
        <section class="menu__item">Grilled ${item}</section>
    </article>
    `;
  }
  return menuHTML;
};

module.exports = { fishMenu };
