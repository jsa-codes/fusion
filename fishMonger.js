const { boatInventory } = require('./fishingBoat.js');

// 1) Invoke the boatInventory function and store it in a variable
//      fishFromBoat contains the result of boatInventory
const fishFromBoat = boatInventory();

const mongerInventory = (budget) => {
  // 2) Create an empty array to store selected fish from the fishing boat that meet the criteria below
  let fishForRestaurant = [];

  // 3) Iterate the boatInventory
  for (const fish of fishFromBoat) {
    // 4) Check to see IF the number of fish on the fishing boat is less than (10)
    //      If so then push fish to fishForRestaurant array AND
    //      DO NOT buy any fish that are priced higher than 7.50
    if (fish.amount >= 10 && fish.price <= 7.5) {
      fishForRestaurant.push(fish);
    }

    if (fish.price <= budget) {
      fishForRestaurant.push(fish);
    }
  }
  return fishForRestaurant;
};

const fishFromMonger = mongerInventory();
console.log(fishFromMonger);

module.exports = { mongerInventory };
/* 
➡️ ALGORITHM

// ⬇️ The below function may go in another module(?) 
5) A chef can tell the Monger that she can only spend 5.00. 
6) Each fish object provided by the Monger should have a quantity of (10)
*/
