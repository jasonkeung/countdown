// questions = {
//     1: ["question1???", "answer1", "answer2"],
//     2: ["question2???", "answer1", "answer2"],
//     3: ["question3???", "answer1", "answer2"],
//     4: ["question4???", "answer1", "answer2"],
//     5: ["question5???", "answer1", "answer2"],
//     6: ["question6???", "answer1", "answer2"],
//     7: ["question7???", "answer1", "answer2"],
// }

// var questionNumber = 1
// const maxQuestions = 7

// document.getElementById('start-button').addEventListener('click', function() {
//     document.getElementById('start-box').hidden = true;
//     document.getElementById('quiz-box').hidden = false;
//     renderQuiz();
// });

// document.getElementById('quiz-answer1').addEventListener('click', function() {
//     incrementQuestion();
// });

// document.getElementById('quiz-answer2').addEventListener('click', function() {
//     incrementQuestion();
// });

// const incrementQuestion = () => {
//     questionNumber++;
//     if (questionNumber > maxQuestions) {
//         document.getElementById('quiz-box').hidden = true;
//         document.getElementById('result-box').hidden = false;
//     } else {
//         renderQuiz();
//     }
// }

// const renderQuiz = () => {
//     document.getElementById("quiz-question").innerHTML=questions[questionNumber][0]; 
//     document.getElementById("quiz-answer1").innerHTML=questions[questionNumber][1]; 
//     document.getElementById("quiz-answer2").innerHTML=questions[questionNumber][2]; 
// }



// Set the date we're counting down to
var countDownDate = new Date("Aug 3, 2024 05:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown-value").innerHTML = days + " days <br/> " + hours + " hours <br/> "
  + minutes + " min <br/> " + seconds + " seconds <br/> ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-value").innerHTML = "shes an olympian :00 congrats!!";
  }
}, 100);