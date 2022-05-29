const { mongerInventory } = require('./fishMonger.js');

// Invoking and then storing the result of the mongerInventory function in fishForRestaurant
// fishForMenu takes one parameter - chef's 'budget' = $5
const fishForMenu = (budget) => {
  const fishForRestaurant = mongerInventory(budget);
  //   Create empty array to store
  let fishItems = [];
  for (const fish of fishForRestaurant) {
    if (fish.price <= budget) {
      fishItems.push(fish);
    }
  }
  return fishItems;
};

let fishMenuItems = fishForMenu(5);
// console.log(fishMenuItems);

// ➡️ This function creates the HTML for the Restaurant Menu
const fishMenu = () => {
  // Create an empty string
  let menuHTML = '';
  //   Iterate fish for menu in order to build menu items
  for (const fish of fishMenuItems) {
    menuHTML += `<h1>Menu</h1>
    <article class="menu">
    <h2>${fish.species}</h2>
        <section class="menu__item">${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>
    </article>
    `;
  }
  return menuHTML;
};

const fishOnMenu = fishMenu(fishMenuItems);
console.log(fishOnMenu);

// Exports fishMenu to main.js
module.exports = { fishMenu };
