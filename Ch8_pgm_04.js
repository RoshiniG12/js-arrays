// Using a variable as an index

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

console.log( days[dayInWeek] ); // Displays "Friday"
console.log( days[dayInWeek - 1] ); // Displays "Thursday"

// Changing the value of dayInWeek
dayInWeek = 2;
console.log( days[dayInWeek] ); // Displays "Wednesday"

// Writing a function to get the day by index
var getDay = function(index) {
    return days[index];
};

// Calling the function and logging the result
console.log( getDay(4) ); // Displays "Friday"



/* Further Adventures
 *
 * 1) Change the value of the dayInWeek variable
 *    to display a different day.
 *
 * 2) Write a function that accepts a number for the
 *    day of the week to be displayed and returns
 *    the day as a string. Assign the function to
 *    a getDay variable.
 *
 * 3) Call your function, passing it 4 as the day
 *    of the week, and log the value it returns.
 *
 */