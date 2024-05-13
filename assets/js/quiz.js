//make sure content is loaded and calls contentLoaded function when dom is loaded in quiz pages
if (
    window.location.pathname.includes("/easy.html") ||
    window.location.pathname.includes("/normal.html") ||
    window.location.pathname.includes("/hard.html")) {


    document.addEventListener("DOMContentLoaded", function () {
        contentLoaded();
    });
}

//function called when document is loaded initializing rest of the file
function contentLoaded() {
    let name = localStorage.getItem("name");
    let player = document.getElementById("got-name");
    player.innerText = name;
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    const continueBtn = document.getElementById("continueBtn");
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "none";

    // Change display back to normal when press popup`s continue button,
    // call countdown function.

    continueBtn.addEventListener("click", function () {                 // event listener on popup button
        popup.style.display = "none";

        //calling functions to operate the quiz
        removeAndCreateChild();
        startCount();
        randomQuest(levels());
    });
}





//count down function
function startCount() {
    let countFunction;                                                  
    let initialCount = 120;
    function startCount() {
        let timer = document.getElementById("timer");                   // select the timer box
        let minute = initialCount;                                      // assigning value 
        countFunction = setInterval(function () {
            if (minute <= 0) {                                          // setting a limit
                clearInterval(countFunction);                           // stops timer
                timer.innerText = "Time Out!";
                setTimeout(function () {
                    window.location.href = "index.html";                //send back the user to home page when timer finishes
                }, 3000);                                               // 3 seconds wait 
                return;
            }
            timer.innerText = minute;                                   // set the timer value
            minute--;                                                   // decreasing the timer by 1 
        }, 1000);                                                       // interval to decrease to 1 second
    }
    // function to stop the timer
    function stopCount() {
        clearInterval(countFunction);                                   //stops the timer
        return initialCount;
    }

    startCount();                                                       // Start the timer
    window.stopCount = stopCount;                                       // access the stop count globally
}
//function to remove the previous answ buttons
function removeAndCreateChild() {
    const answGrid = document.getElementById("answ-grid");              // gets the actual answer buttons in the html 

    //removing answer buttons
    const childrenRemove = Array.from(answGrid.children);               // gets the children array from the answer buttons grid
    //function to remove the children
    childrenRemove.forEach(child => {
        if (child.classList.contains("btn-answ")) {                     // checks which button contains that class
            answGrid.removeChild(child);                                // if yes remove buttons from the grid
        }
    });
}

//get the level that we choose
function levels() {
    const page = window.location.pathname;                              // get the page location
    if (page.includes("easy.html")) {                                   // checks if the path name includes parameter x3 times
        return "easy";                                                  // returns a value x3 times
    } else if (page.includes("normal.html")) {
        return "normal";
    } else if (page.includes("hard.html")) {
        return "hard";
    } else {
        alert("Page non reconized!!");                                   // if path is not recognized
    }
}



//sets a random question depending on which level page we choose
function randomQuest(level) {
    let questions;                                                        // variable to store results
    if (level === "easy") {
        questions = questionEasy;                                         // setting questions to easy/normal/hard mode array
    } else if (level === "normal") {
        questions = questionNormal;
    } else if (level === "hard") {
        questions = questionHard;
    }
    //filters the questions that are already been used 
    let usedQuestions = questions.filter(question => !question.displayed); //checks if questions are not displayed
    console.log("Used Questions:", usedQuestions);







    //randomize questions and display it + display relative answers
    if (usedQuestions.length > 0) {
        const random = Math.floor(Math.random() * usedQuestions.length);
        let questionBox = document.getElementById("question-box");          // get element that we need to change
        let actualQuestion = usedQuestions[random];                         // gets the current question
        questionBox.innerText = actualQuestion.question;                    // displays current question
        actualQuestion.displayed = true;                                    // changes the display value from false to true when question is displayed 


        // randomize answer with fisher-yates, display answers (looping through each of them) created by function, as buttons
        for (let i = actualQuestion.answers.length - 1; i > 0; i--) {
            const rndm = Math.floor(Math.random() * (i + 1));
            [actualQuestion.answers[i], actualQuestion.answers[rndm]] = [actualQuestion.answers[rndm], actualQuestion.answers[i]];
        }

        actualQuestion.answers.forEach(function (answer) {                  //function for each answer in the actual question
            let newButtons = document.createElement("button");              //new answer buttons

            newButtons.innerText = answer.text;                             //displays its text
            newButtons.classList.add("answ-btn");                           //give a class
            //sets correct  and false answers
            if (answer.correct) {                                           // answer is correct
                newButtons.dataset.correct = "true";
                newButtons.setAttribute("id", "correct");                   // add id if correct answer

            } else {
                newButtons.dataset.correct = "false";                       // answer is wrong
            }
            // answ-grid is the container of our answer buttons
            let answGrid = document.getElementById("answ-grid");
            answGrid.appendChild(newButtons);                               // creates answer buttons
            //listener to click on answer buttons calls function to check if answer is correct
            newButtons.addEventListener("click", function () {
                checkCorrectAnswer(this);                                   // this new buttons

            });
        });

    } else {
        let questionBox = document.getElementById("question-box");          // gets the question container
        questionBox.innerText = "";                                         // clears the question box
        quizResult();                                                       // show results of the quiz
    }
}
// checking correct answer 
function checkCorrectAnswer(clicked) {
    let thumbUp = document.getElementById("thumb-up");
    let thumbDown = document.getElementById("thumb-down");
    let score = parseInt(document.getElementById("score").innerHTML);       // sets the score to a number
    let correctNumber = parseInt(document.getElementById("correct-answers").innerHTML);
    let wrongNumber = parseInt(document.getElementById("wrong-answers").innerHTML);
    const answerButtons = document.getElementsByClassName("answ-btn");      // getting answer buttons
    const answGrid = document.getElementById("answ-grid");                  // getting answer container
    //checking the right answer, if answer right increase score giving feedbacks in any case
    if (clicked.dataset.correct === "true") {                               // if answer correct checks boolean                            
        score += 100;                                                       // increase score by 100
        thumbUp.classList.remove("hide");                                   // shows relative img
        correctNumber += 1;                                                 // green counter increase by 1
    } else {
        thumbDown.classList.remove("hide");                                 // shows relative image
        wrongNumber += 1;                                                   // wrong counter increase by 1
    }

    document.getElementById("score").innerHTML = score;                     // setting the score
    document.getElementById("correct-answers").innerHTML = correctNumber;   
    document.getElementById("wrong-answers").innerHTML = wrongNumber;
    for (let i = 0; i < answerButtons.length; i++) {                        // iterate through each answer
        if (answerButtons[i] === clicked)
            if (clicked.dataset.correct === "true") {                       // checks if answer is correct
                clicked.style.backgroundColor = "green";                    // sets correct answer green
            } else {
                clicked.style.backgroundColor = "red";                      // sets wrong answer to red

            }

        answerButtons[i].disabled = true;                               // disable answer buttons so cant increase score
    }


    setTimeout(function () {
        answGrid.innerHTML = "";                                            // clear the answer buttons

        thumbDown.classList.add("hide");                                    // hide the img relative to correct or wrong answer
        thumbUp.classList.add("hide");
        randomQuest(levels());                                              // restart function
    }, 1000);                                                               // interval of 1 sec between user answering and next question

}

//creare una funzione per la fine del quiz dando il risultato e un pulsante per tornare indietro.
//create contenitore sotto il popup nella pagina easy
function quizResult() {
    const resultContainer = document.getElementById("result-container");       // result container
    resultContainer.style.display = "flex";                                   // gives visibility to the container that was set to display "none"
    const correctNumber = parseInt(document.getElementById("correct-answers").innerHTML);  // gets the number of correct answers
    const wrongNumber = parseInt(document.getElementById("wrong-answers").innerHTML);      // gets the number of wrong answers
    const totalNumber = correctNumber + wrongNumber;                                       // total answers
    const correctPercentage = ((correctNumber / totalNumber) * 100).toFixed(2);            // percentage of correct answers over total
    let resultParagraph = document.getElementById("result-p");                             // gets result paragraph
    if (correctPercentage > 40) {                                                          // if percentage is greater than 40 over 10 total question
        resultParagraph.innerText = `Well done you answered correctly ${correctNumber} questions!`;// gives positive feedback
    } else {
        resultParagraph.innerText = `Go back to study!!! you answered ${wrongNumber} times wrong!!`; // gives negative feedback
    }
    const score = document.getElementById("score");                            // get the element where the score is stored 
    const scoreResult = document.getElementById("score-result");                // get the empty element where to store the score
    scoreResult.innerText = score.innerText;                                   // sets the same text to the element
    const name = document.getElementById("got-name");                          // element where name is stored
    const nameResult = document.getElementById("got-name-result");             // empty element to store the name
    nameResult.innerText = name.innerText;                                     // sets same text to the element
    const initialCount = window.stopCount();                                   // set the initial count to stopCount
    const timeResult = document.getElementById("time-used");                   // get the element where to store the time result
    const time = document.getElementById("timer").innerText;                   // get the timer text
    timeResult.innerText = initialCount - parseInt(time);                      // set the calculate value of the initial time minus the time left
    const comeback = document.getElementById("comeback");                      // get the button in the result container
    const quizBox = document.getElementById("quiz-container");                 // get quiz container
    quizBox.style.display = "none";                                            // changes display settings to quiz container
    const header = document.getElementById("header");                          // get header
    header.style.display = "none";                                             // clear the container from view
    comeback.addEventListener("click", function () {                           // adding click listener to the button 
        window.location.href = "index.html";                                   // relocating to home page when button is clicked
    });

}


/**3 array for different levels 
 * 
 * the question easy contains relatively easy questions with 2 answers 
 * 
 * the question normal constains still simple questions with 3 answers giving the user less chances to random pick the correct answer
 * 
 * the question hard contains harder questions with 4 answers with low chances to random pick the right answer
 * 
 * */


// quiz array easy
const questionEasy = [
    {
        question: "How many days are in a year?",
        answers: [
            { text: "365", correct: true },
            { text: "536", correct: false }
        ],
        displayed: false
    },

    {
        question: "How many continents are there in the world?",
        answers: [
            { text: "12", correct: false },
            { text: "7", correct: true }
        ],
        displayed: false
    },

    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo DaVinci", correct: true },
            { text: "Leonardo DiCaprio", correct: false }
        ],
        displayed: false
    },

    {
        question: "What is the highest mountain in our planet?",
        answers: [
            { text: "Everest", correct: true },
            { text: "Mt. Blanc", correct: false }
        ],
        displayed: false
    },

    {
        question: "How many oceans are there?",
        answers: [
            { text: "5", correct: true },
            { text: "15", correct: false }
        ],
        displayed: false
    },
    {
        question: "From which direction does the sun rise?",
        answers: [
            { text: "east", correct: true },
            { text: "west", correct: false }
        ],
        displayed: false
    },
    {
        question: "Which planet is known as the red planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Earth", correct: false }
        ],
        displayed: false
    },
    {
        question: "Who wrote Romeo and Juliet?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Dante Alighieri", correct: false }
        ],
        displayed: false
    },
    {
        question: "What is the main ingridient in guacamole?",
        answers: [
            { text: "avocado", correct: true },
            { text: "pineapple", correct: false }
        ],
        displayed: false
    },
    {
        question: "Who is known as the father of modern physics?",
        answers: [
            { text: "Isac Newton", correct: true },
            { text: "Nikola Tesla", correct: false }
        ],
        displayed: false
    }


];
// quiz normal mode
const questionNormal = [
    {
        question: "How many hearts does an octopus have?",
        answers: [
            { text: "3", correct: true },
            { text: "6", correct: false },
            { text: "5", correct: false }
        ],
        displayed: false
    },

    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "Mercury", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Earth", correct: false }
        ],
        displayed: false
    },

    {
        question: "Which planet in our solar system is the hottest?",
        answers: [
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false }
        ],
        displayed: false
    },

    {
        question: "Kratos is the main character of which video game?",
        answers: [
            { text: "God Of War", correct: true },
            { text: "Fallout", correct: false },
            { text: "Last of Us", correct: false }
        ],
        displayed: false
    },

    {
        question: "What was the birth name of boxing champion Muhammad Ali?",
        answers: [
            { text: "Cassius Clay", correct: true },
            { text: "Classius Kay", correct: false },
            { text: "Cashews Clame", correct: false }
        ],
        displayed: false
    },

    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1908", correct: false },
            { text: "1916", correct: false }
        ],
        displayed: false
    },

    {
        question: "What is the chemical symbol for potassium?",
        answers: [
            { text: "K", correct: true },
            { text: "Pt", correct: false },
            { text: "P", correct: false }
        ],
        displayed: false
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            { text: "Marie Curie", correct: true },
            { text: "Mother Teresa", correct: false },
            { text: "Rosalind Franklin", correct: false }
        ],
        displayed: false
    },
    {
        question: "Which animal is not a marsupial?",
        answers: [
            { text: "Kangaroo", correct: false },
            { text: "Koala", correct: false },
            { text: "Lemur", correct: true }
        ],
        displayed: false
    },
    {
        question: "What is the largest mammal on Earth?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false }
        ],
        displayed: false
    }



];


// quiz hard level

const questionHard = [
    {
        question: "Where is the strongest human muscle located?",
        answers: [
            { text: "Jaw", correct: true },
            { text: "Leg", correct: false },
            { text: "Arm", correct: false },
            { text: "Hand", correct: false }
        ],
        displayed: false
    },

    {
        question: "What is the 4th letter of the Greek alphabet?",
        answers: [
            { text: "Delta", correct: true },
            { text: "Gamma", correct: false },
            { text: "Alpha", correct: false },
            { text: "Beta", correct: false }
        ],
        displayed: false
    },

    {
        question: "Which Renaissance artist is buried in Rome's Pantheon?",
        answers: [
            { text: "Raphael", correct: true },
            { text: "Michelangelo", correct: false },
            { text: "Donatello", correct: false },
            { text: "Leonardo DaVinci", correct: false }
        ],
        displayed: false
    },

    {
        question: "Who wrote the ballet Swan Lake?",
        answers: [
            { text: "Tchaikovsky", correct: true },
            { text: "Mozart", correct: false },
            { text: "Beethoven", correct: false },
            { text: "Bach", correct: false }
        ],
        displayed: false
    },

    {
        question: "When the Wow! Signal was detected?",
        answers: [
            { text: "1977", correct: true },
            { text: "1877", correct: false },
            { text: "1997", correct: false },
            { text: "1987", correct: false }
        ],
        displayed: false
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: [
            { "text": "Ag", "correct": true },
            { "text": "Si", "correct": false },
            { "text": "Au", "correct": false },
            { "text": "Pt", "correct": false }
        ],
        displayed: false
    },
    {
        question: "Which chemical element has the highest melting point?",
        answers: [
            { text: "Carbon", correct: false },
            { text: "Tungsten", correct: true },
            { text: "Titanium", correct: false },
            { text: "Platinum", correct: false }
        ],
        displayed: false
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Vietnam", correct: false }
        ],
        displayed: false
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Brain", correct: false },
            { text: "Skin", correct: true },
            { text: "Liver", correct: false },
            { text: "Heart", correct: false }
        ],
        displayed: false
    },
    {
        question: "What is the smallest bone in the human body?",
        answers: [
            { text: "Stapes", correct: true },
            { text: "Cochlea", correct: false },
            { text: "Femur", correct: false },
            { text: "Metacarpal", correct: false }
        ],
        displayed: false
    }
];


