// Displaying a multiple choice question

// Displaying a multiple choice question

var displayQuestion = function (questionAndAnswer) {
  var options = [ "A", "B", "C", "D", "E" ];
  
  console.log(questionAndAnswer.question);
  
  questionAndAnswer.answers.forEach(function (answer, i) {
      console.log(options[i] + " - " + answer);
  });
};

var question1 = {
  question: "What is the capital of France?",
  answers: [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
  ],
  correctAnswer: "Paris"
};

var question2 = {
  question: "Which planet is known as the Red Planet?",
  answers: [
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn"
  ],
  correctAnswer: "Mars"
};

var question3 = {
  question: "Who wrote 'To Kill a Mockingbird'?",
  answers: [
      "Harper Lee",
      "J.K. Rowling",
      "Charles Dickens",
      "Mark Twain"
  ],
  correctAnswer: "Harper Lee"
};

var questions = [question1, question2, question3];

// Display each question using forEach
questions.forEach(function(question, index) {
  console.log("Question " + (index + 1) + ":");
  displayQuestion(question);
  console.log("\n"); // Add a new line between questions for clarity
});

// Display a specific question by index
var indexToDisplay = 1; // Change this index to display a different question
console.log("Displaying Question " + (indexToDisplay + 1) + ":");
displayQuestion(questions[indexToDisplay]);

  
  
  /* Further Adventures
   *
   * 1) Add two more question objects.
   *
   * 2) Create an array with your question objects.
   *
   * 3) Use forEach to call displayQuestion on
   *    each of your questions.
   *
   * 4) Can you execute a command at the prompt
   *    to display a particular question?
   */