// Step 1:
// Write a createGroceries function that returns an array with 6 groceries items
function createGroceries() {
  return ["Apple", "Orange", "Cheese", "Milk", "Bread", "Egg"];
}

// Step 2:
// Write a getSecondGroceryItem function that returns the second grocery item from `groceries` argument
function getSecondGroceryItem(groceries) {
  return groceries[1];
}

// Step 3:
// Write a getGroceriesCount that returns the length of the `groceries` argument
function getGroceriesCount(groceries) {
  return groceries.length;
}

// Step 4:
// Write a getLastGroceryItem function that returns the last grocery item from `groceries` argument
function getLastGroceryItem(groceries) {
  return groceries[groceries.length - 1];
}

// Step 5:
// Write a removeLastGroceryItem function that removes the last grocery item and return it
function removeLastGroceryItem(groceries) {
  return groceries.pop();
}

// Step 6:
// Write a addNewGroceries function that adds two new and different grocery items to the end of the groceries argument
// and returns the modified array
function addNewGroceries(groceries, itemOne, itemTwo) {
  groceries.push(itemOne, itemTwo);
  return groceries;
}

// Step 7:
// Write a getFirstThreeGroceryItems function that returns a new array that contains the first three grocery items
function getFirstThreeGroceryItems(groceries) {
  return groceries.slice(0, 3);
}

// 🌶️🌶️🌶️ **Challenge**

// Step 1:
// Write a deleteThirdItem function that deletes the third item from the groceries argument
// and returns the modified groceries list
function deleteThirdItem(groceries) {
  groceries.splice(2, 1);
  return groceries;
}

// Step 2:
// Write a insertItemAtBeginning function that inserts a new grocery item at the beginning of the groceries argument
// and returns the modified groceries array
function insertItemAtBeginning(groceries, item) {
  groceries.unshift(item);
  return groceries;
}

// Step 3:
// Write a replaceFirstTwoItems function that replace the first two elements with 'ketchup' and 'chili'
// and return the modified groceries array
function replaceFirstTwoItems(groceries) {
  groceries.splice(0, 2, "Ketchup", "Chili");
  return groceries;
}

// DO NOT CHANGE THE LINE OF CODE BELOW
const groceries = createGroceries();

module.exports = {
  groceries,
  createGroceries,
  getSecondGroceryItem,
  getGroceriesCount,
  getLastGroceryItem,
  removeLastGroceryItem,
  addNewGroceries,
  getFirstThreeGroceryItems,
  deleteThirdItem,
  insertItemAtBeginning,
  replaceFirstTwoItems,
};
