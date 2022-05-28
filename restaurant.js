const { mongerInventory } = require('./fishMonger.js');

const fishForRestaurant = mongerInventory();

const fishForMenu = () => {};

const fishMenu = () => {
    // Create an empty string
  let menuHTML = '';
//   Iterate fish for menu in order to build menu items
  for (const  of ) {
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

// Export fishMenu
module.exports = { fishMenu };
