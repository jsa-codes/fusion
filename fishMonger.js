const { boatInventory } = require('./fishingBoat.js');

// 1) Invoke the boatInventory function and store it in a variable
//      fishFromBoat contains the result of the boatInventory function

const fishFromBoat = boatInventory();

// chefsBudget is the 'Placeholder' for the Chef's current budget of $5
// This function is invoked in the restaurant.js module

const mongerInventory = (chefsBudget) => {
  // STEP 1 and 2: The fishmonger buys fish that match the criteria and we save that to fishForRestaurants
  let fishForRestaurants = [];

  // Iterate the boatInventory aka - "fishFromBoat"
  for (const fish of fishFromBoat) {
    // STEP 3: Check to see IF the number of fish on the fishing boat is greater than (10)
    //      If so then push fish to fishForRestaurant array AND
    //      DO NOT buy any fish that are priced higher than 7.50
    if (fish.amount >= 10 && fish.price <= 7.5) {
      fishForRestaurants.push(fish);
    }
  }

  // STEP 4: Select a subset of the fish that match the chef's budget and Iterate those fish

  let fishThatMeetBudget = [];
  for (const fish of fishForRestaurants) {
    if (fish.price <= chefsBudget) {
      fishThatMeetBudget.push(fish);
    }
  }

  // STEP 5: Set the quantity of each fish object to 10

  for (const fish of fishThatMeetBudget) {
    // Every fish is greater than or equal to (10)
    fish.amount = 10;
  }

  return fishThatMeetBudget;
};

// EXPORT MONGER INVENTORY
module.exports = { mongerInventory };
