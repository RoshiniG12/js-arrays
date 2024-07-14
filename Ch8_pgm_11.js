// Finding the total shopping bill

// Finding the total shopping bill

// Function to calculate total bill from separate arrays
var getTotalBill = function (itemCosts, itemCounts) {
    var total = 0;

    itemCosts.forEach(function (cost, i) {
        total += cost * itemCounts[i];
    });

    return total;
};

// Function to calculate total bill from array of objects
var getTotalBillFromObjects = function (items) {
    var total = 0;

    items.forEach(function (item) {
        total += item.cost * item.numberBought;
    });

    return total;
};

// Initial separate arrays of costs and quantities
var costs = [ 1.99, 4.95, 2.50, 9.87, 3.75 ]; // Adding an extra item cost
var numOfEach = [ 2, 1, 5, 2, 3 ]; // Corresponding quantities

// Logging total cost from separate arrays
console.log("Total cost from separate arrays is $" + getTotalBill(costs, numOfEach));

// Array of objects with cost and numberBought properties
var items = [
    { cost: 1.99, numberBought: 2 },
    { cost: 4.95, numberBought: 1 },
    { cost: 2.50, numberBought: 5 },
    { cost: 9.87, numberBought: 2 },
    { cost: 3.75, numberBought: 3 }
];

// Logging total cost from array of objects
console.log("Total cost from array of objects is $" + getTotalBillFromObjects(items));




/* Further Adventures
 *
 * 1) Add an extra item to the shopping trip.
 *
 * 2) Change the function so that forEach iterates
 *    over itemCounts instead of itemCosts.
 *    Can you make it work?
 *
 * 3) Create a single array of objects with
 *    cost and numberBought properties.
 *
 *    items = [ { cost: 1.99, numberBought: 2 },
 *              { cost: 4.95, numberBought: 1 } ];
 *
 * 4) Update getTotalBill to accept a single array
 *    of items.
 *
 */