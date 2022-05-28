const { mongerInventory } = require('./fishMonger.js');

// Invoking and then storing the result of the mongerInventory function

const fishForMenu = (budget) => {
  const fishForRestaurant = mongerInventory(budget);
  let fishItems = [];
  //   for (const fish of fishForRestaurant) {
  //     // console.log('Iterating Fish');
  //     // console.log(fish.price, budget);
  //     if (fish.price <= budget) {
  //       //   console.log('Inside IF statement');
  //       fishItems.push(fish);
  //     }
  //   }
  return fishItems;
};

let fishMenuItems = fishForMenu(5);
console.log(fishMenuItems);

// const fishMenu = () => {
//     // Create an empty string
//   let menuHTML = '';
// //   Iterate fish for menu in order to build menu items
//   for (const  of ) {
//     menuHTML += `<h1>Menu
//     <article class="menu">
//         <h2>${item}</h2>
//         <section class="menu__item">${item} Soup</section>
//         <section class="menu__item">${item} Sandwich</section>
//         <section class="menu__item">Grilled ${item}</section>
//     </article>
//     `;
//   }
//   return menuHTML;
// };

// Export fishMenu
// module.exports = { fishMenu };
