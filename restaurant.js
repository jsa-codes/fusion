const { mongerInventory } = require('./fishMonger.js');

const availableFishWithinBudget = mongerInventory(5);

// The chef only buys 50% of the Monger Inventory that meets the chef's budget
let purchasedFish = [];
for (const fish of availableFishWithinBudget) {
  fish.amount = fish.amount / 2;
  //   fish.amount = 5;
  purchasedFish.push(fish);
}

// This function should take in the fish the Monger has sold to the chef that met the chef's budget.

// This function creates the HTML for the Restaurant Menu
const fishMenu = () => {
  // Create an empty string
  let menuHTML = `
    <h1>Menu</h1>
    <article class="menu">`;

  // Iterate purchasedFish array
  //   For each fish in the array use string interpolation to inject the fish species into the appropriate locations in the HTML
  for (const fish of purchasedFish) {
    menuHTML += `
        <h2>${fish.species}</h2>
        <section class="menu__item">${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>
    `;
  }
  menuHTML += `</article>
    `;
  return menuHTML;
};

// Exports fishMenu to main.js
module.exports = { fishMenu };
