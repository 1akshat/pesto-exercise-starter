function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  var index;
  var arrCurrentInvName = []; // Names of arr1's items
  var arrNewInvName = []; // Names of arr2's items

  // Same as using two for loops, this takes care of increasing the number of stock quantity.
  arr1.forEach(function(item1) {
    arr2.forEach(function(item2) {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0];
      }
    });
  });

  // Get item's name for new Inventory
  arr2.forEach(function(item) {
    arrNewInvName.push(item[1]);
  });

  // Get item's name for Current Inventory
  arr1.forEach(function(item) {
    arrCurrentInvName.push(item[1]);
  });

  // Add new inventory items to current inventory.
  arrNewInvName.forEach(function(item) {
    if (arrCurrentInvName.indexOf(item) === -1) {
      index = arrNewInvName.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  // Sort the array alphabetically using the second element of the array as base.
  arr1.sort(function(currItem, nextItem) {
    //Ternary function to avoid using if else
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;
}

export {
  updateInventory,
};
