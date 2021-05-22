// Assign variables
var viewHighScores = document.querySelector("#viewHighScores");
var timerEl = document.querySelector("#timer");
var questBlanks = document.querySelector(".questions-blanks");
var container = document.querySelector("#container");
var  firstPage = document.querySelector("#firstPage");
var startGameBtn = document.querySelector("#btn-start");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");



var runQuestion = 0;
var chosenQuest = [];
var timer;
var timerCount; 


console.log(viewHighScores);
console.log(timerEl);
console.log(questBlanks);
console.log(container);
console.log(firstPage);
console.log(startGameBtn);
console.log(quiz);
console.log(question);
console.log(choiceA);
console.log(choiceB);
console.log(choiceC);
console.log(choiceD);

// Making questions and choices by put them in array and will use Loop to make it run 
var questions = [{
    question:"Which of the following is and even listener in Javascript?",
    choiceA:"onclick",
    choiceB:"click",
    choiceC:"Click()",
    choiceD:"blur",
    correct:"B"
    },
    {
    question:"Which of the following will write the messege 'Hello Lillie!' in an alert box?",
    choiceA:"alertBox('Hello Lillie!');",
    choiceB:"alert('Hello Lillie!');",
    choiceC:"alert(Hello Lillie!);",
    choiceD:"msgAlert('Hello Lillie!');",
    correct:"B",
    },
   { 
    question:"What will the code return? Boolean(5 > 10)", 
    choiceA:"Nan",
    choiceB:"StntaxError",
    choiceC:"true",
    choiceD:"false",
    correct:"D"
   },
   {
    question:"which is the correct way to write a comment in Javascript?", 
    choiceA:"{#...}",
    choiceB:"<!---...--->",
    choiceC:"//...",
    choiceD:"/* ... */",
    correct:"C"
   },
   {
    question:"How do you create a new function in Javascript?",
    choiceA:"funtion myFunction() {}",
    choiceB:"Function = myFunction() {}",
    choiceC:"new.function() {}",
    choiceD:"function:myFunction() {}",
    correct:"A"
   },
   {
    question:"Inside which HTML element do we put the Javascript?",
    choiceA:"<javascript>",
    choiceB:"<js>",
    choiceC:"<script>",
    choiceD:"<scripting>",
    correct:"C"
}]; 
console.log(questions[0]);

