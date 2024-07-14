// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var index = dayInWeek - 1;
  var visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors on " + days[index];

  return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481, 310, 200 ];

var reportFriday = getVisitorReport(visitors, 5); // Friday

console.log(reportFriday);

// Function to get report from a month array, given week and day
var getMonthlyVisitorReport = function (monthArray, weekIndex, dayIndex) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var visitorReport = "There were ";
  visitorReport += monthArray[weekIndex][dayIndex];
  visitorReport += " visitors on " + days[dayIndex];

  return visitorReport;
};

// Example usage with a month array
var week1 = [300, 250, 280, 320, 400, 350, 200];
var week2 = [350, 280, 310, 290, 420, 380, 220];
var week3 = [320, 270, 300, 310, 390, 360, 210];
var week4 = [380, 290, 330, 340, 410, 400, 230];

var monthArray = [week1, week2, week3, week4];

var reportWeek2Wednesday = getMonthlyVisitorReport(monthArray, 1, 2); // Week 2, Wednesday
var reportWeek3Sunday = getMonthlyVisitorReport(monthArray, 2, 6); // Week 3, Sunday

console.log(reportWeek2Wednesday);
console.log(reportWeek3Sunday);



/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */