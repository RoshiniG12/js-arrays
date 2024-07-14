// Iterating over an array with forEach

var items;
var showInfo;
var showInfoWithLength;
var getTotalLetters;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach",
  "Statue of Liberty",
  "Stonehenge"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

showInfoWithLength = function (itemToShow) {
    console.log(itemToShow + " - " + itemToShow.length + " letters");
};

getTotalLetters = function () {
    var totalLetters = 0;
    items.forEach(function (item) {
        totalLetters += item.length;
    });
    return totalLetters;
};

console.log("Items:");
items.forEach(showInfo);
console.log("\nItems with length:");
items.forEach(showInfoWithLength);
console.log("\nTotal number of letters in all items: " + getTotalLetters());

/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */