// Manipulating arrays with push, pop and join

var items = [];
var item = "The Pyramids";
var removed;

// Pushing items onto the array
items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

// Pop an item from the array
removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));

// Further adventures
items.push("The Eiffel Tower"); // Push another item onto the array
console.log(items.join(" and ")); // Log the joined items

items[1] = "Statue of Liberty"; // Set one of the items using square brackets
console.log(items.join(" and "));

// Pushing multiple items at once
items.push("Stonehenge", "Great Wall of China");
console.log(items.join(" and "));



/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "The Taj Mahal"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */