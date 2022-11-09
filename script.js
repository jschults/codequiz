var startButton = document.getElementById('start-button');
// var Button1 = document.getElementById("button1")
// var Button2 = document.getElementById("button2")
// var Button3 = document.getElementById("button3")
// var Button4 = document.getElementById("button4")
// var showList = document.getElementById("choices")

var timeContainer = document.getElementById("time");
var questionIntro = document.getElementById ("question");
var option = document.getElementById("options");
var score= 0;
var timer= 60;
var questionIndex = 0;

var quizQuestions = [
    {
        questions: "Which characters does a single line comment have",
        choices: ["1. -", "2. --", "3. //", "4 . //"],
        correct: "3"
    },
    {
        questions: "What is the tag for variable?",
        choices: ["1. let", "2. const", "3. var", "4 . price1"],
        correct: "3"
    },
    {
        questions: "What is the tag for variable?",
        choices: ["1. let", "2. const", "3. var", "4 . price1"],
        correct: "3"
    },
    {
        questions: "What is the tag for variable?",
        choices: ["1. let", "2. const", "3. var", "4 . price1"],
        correct: "3"
    },
]

startButton.addEventListener("click", start); 
 
console.log(quizQuestions)

function start() {

    startButton.setAttribute("class", "hidden");
    setTime();
    isQuestionOne()
    // event.preventDefault()
    // console.log(event)
    // document.getElementById('start-section').style.display = "none"
    // displayQuestion()
}
function setTime (){
    timeContainer.textContent=timer 
    let countdown = setInterval (() => {
        timeContainer.textContent = ''
        timer -- 
        timeContainer.textContent = timer
        if (timer === 0 || questionIndex === quizQuestions ) {
            clearInterval(countdown)
            endGame()
        }
    }, 1000)
}



function isQuestionOne() {
    questionIndex++
    questionIntro.innerHTML = "";
    // instructions.innerHTML = "";

    var questionEl = document.createElement("h1"); 
    questionEl.setAttribute("id", "theQuest");
    questionIntro.appendChild(questionEl);
    document.getElementById("theQuest").textContent = quizQuestions[0].questions;

    for(var i=0; i < quizQuestions[0].choices.length; i++) {
            var cEle = document.createElement("li");
            
            cEle.setAttribute("id", quizQuestions[0].choices[i]); 
            option.appendChild(cEle); 
            cEle.append(quizQuestions[0].choices[i]);
            
    
            cEle.addEventListener("click", function (event) {
                if (event.target.id === quizQuestions[0].correct) {
                    results.textContent = "Correct!"; 
                    score += 20; 
                } else {
                    results.textContent = "Incorrect!";
                    time -= 10
                }
                console.log(score);
                isQuestionTwo (); 
             questionIndex++
            });
        }
    }

    function isQuestionTwo () {

            questionIntro.innerHTML = "";
            option.innerHTML = "";
        
            var questionEl = document.createElement("h1"); 
            questionEl.setAttribute("id", "theQuest")
            questionIntro.appendChild(questionEl);
            document.getElementById("theQuest").textContent = quizQuestions[1].questions;
        
            for(var i=0; i < quizQuestions[0].choices.length; i++) {
                    var cEle = document.createElement("li");
                    
                    cEle.setAttribute("id", quizQuestions[1].choices[i]); 
                    option.appendChild(cEle); 
                    cEle.append(quizQuestions[1].choices[i]);
                    
            
                    cEle.addEventListener("click", function (event) {
                        if (event.target.id === quizQuestions[1].correct) {
                            results.textContent = "Correct!"; 
                            score += 20; 
                        } else {
                            results.textContent = "Incorrect!";
                            time -= 10
                        }
                        console.log(score);
                        isQuestionThree ();
                        questionIndex++
                    });
                }
            }

            function isQuestionThree() {
    questionIntro.innerHTML = "";
    option.innerHTML = "";

    var questionEl = document.createElement("h1"); 
    questionEl.setAttribute("id", "theQuest");
    questionIntro.appendChild(questionEl);
    document.getElementById("theQuest").textContent = quizQuestions[2].questions;

    for(var i=0; i < quizQuestions[0].choices.length; i++) {
            var cEle = document.createElement("li");
            
            cEle.setAttribute("id", quizQuestions[0].choices[i]); 
            option.appendChild(cEle); 
            cEle.append(quizQuestions[0].choices[i]);
            
    
            cEle.addEventListener("click", function (event) {
                if (event.target.id === quizQuestions[0].correct) {
                    results.textContent = "Correct!"; 
                    score += 20; 
                } else {
                    results.textContent = "Incorrect!";
                    time -= 10
                }
                console.log(score);
                isQuestionFour ();
                questionIndex++
            });
        }
    }

    function isQuestionFour() {
    questionIntro.innerHTML = "";
    option.innerHTML = "";

    var questionEl = document.createElement("h1"); 
    questionEl.setAttribute("id", "theQuest");
    questionIntro.appendChild(questionEl);
    document.getElementById("theQuest").textContent = quizQuestions[3].questions;

    for(var i=0; i < quizQuestions[0].choices.length; i++) {
            var cEle = document.createElement("li");
            
            cEle.setAttribute("id", quizQuestions[0].choices[i]); 
            option.appendChild(cEle); 
            cEle.append(quizQuestions[0].choices[i]);
            
    
            cEle.addEventListener("click", function (event) {
                if (event.target.id === quizQuestions[0].correct) {
                    results.textContent = "Correct!"; 
                    score += 20; 
                } else {
                    results.textContent = "Incorrect!";
                    time -= 10
                }
                console.log(score);
                questionIndex++
        });
    
            }


        }

// function displayQuestion() {
//   showList.style.visibility="visible"  
//     let myQuestion = document.querySelector("#question")
//     myQuestion.innerHTML = quizQuestions[questionIndex].questions
// Button1.innerHTML=quizQuestions[questionIndex].chosices[0]
// Button2.innerHTML=quizQuestions[questionIndex].choices[1]
// Button3.innerHTML=quizQuestions[questionIndex].choices[2]
// Button4.innerHTML=quizQuestions[questionIndex].choices[3]
//     //when the question is answered

//     //check if it's correct or not

//     //
// }

// 'll add one to the Index and displayQuestion()

// create timer thats triggered by start button
// have quiz check my answers to see if they're correct by comparing answer #1 to the user selection


