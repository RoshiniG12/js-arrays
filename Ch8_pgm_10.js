// Using the arguments passed by forEach - compact

var rectangles = [
  { length: 5, width: 3 },
  { length: 7, width: 2 },
  { length: 4, width: 4 }
];

// Define a function to assign area to each rectangle
var assignArea = function(rectangle) {
  rectangle.area = rectangle.length * rectangle.width;
};

// Define a function to show information about each rectangle
var showInfo = function(rectangle) {
  console.log("Length: " + rectangle.length);
  console.log("Width: " + rectangle.width);
  console.log("Area: " + rectangle.area);
  console.log("--------------------");
};

// Use forEach to assign area and display info for each rectangle
rectangles.forEach(function(rectangle) {
  assignArea(rectangle);
  showInfo(rectangle);
});

  
  
  /* Further Adventures
   *
   * 1) Create an array of rectangle objects.
   *    Each rectangle should have a length
   *    property and a width property.
   *
   * 2) Define an assignArea function that
   *    takes a rectangle as an argument and
   *    assigns an area property holding
   *    the area of the rectangle.
   *
   * 3) Define a showInfo function that
   *    takes a rectangle as an argument and
   *    displays its properties on the console.
   *
   * 4) Use forEach and your two functions
   *    to display info about each of
   *    the rectangles in the array.
   *
   */