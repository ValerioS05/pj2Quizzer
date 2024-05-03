//make sure content is loaded and calls contentLoaded function when dom is loaded in quiz pages
if (
    window.location.pathname.includes("/easy.html") ||
    window.location.pathname.includes("/normal.html") ||
    window.location.pathname.includes("/hard.html")) {


    document.addEventListener("DOMContentLoaded", function () {
        contentLoaded();
    });
}

//function called when document is loaded initializing rest of the functions
function contentLoaded() {
    let name = localStorage.getItem("name");
    let player = document.getElementById("got-name");
    player.innerText = name;
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    const nextQuest = document.getElementById("next-quest");
    nextQuest.classList.add("hide");                                     // hide next button
    const continueBtn = document.getElementById("continueBtn");


    // Change display back to normal when press popup`s continue button,
    // call countdown function.

    continueBtn.addEventListener("click", function () {                 // event listener on popup button
        popup.style.display = "none";

        //calling functions to operate the quiz
        removeAndCreateChild();                                         // line 52
        startCount();                                                   // line 34
        randomQuest(levels());                                          // levels: line 67   , randomQuest:line 83
        nextButtonListener();                                           // line 167
    });
}





//count down function
function startCount() {
    let countFunction;                                                 // empty container for the function

    function startCount() {                 
        let timer = document.getElementById("timer");                   // select the timer box
        let minute = 60;                                                // assigning value 
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
        alert("Page non reconized!!")                                   // if path is not recognized
    }
}



//sets a random question depending on which level page we choose
function randomQuest(level) {
    let questions;                                                      // variable to store results
    if (level === "easy") {
        questions = questionEasy;                                       // setting questions to easy/normal/hard mode array
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
        let questionBox = document.getElementById("question-box");           // get element that we need to change
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
            })
        })

    } else {
        let questionBox = document.getElementById("question-box");
        questionBox.innerText = "";
        stopCount();                                                        //timer stops when questions are finished
        quizResult();                                                       // show results of the quiz
    }
}
// checking correct answer 
function checkCorrectAnswer(clicked) {
    const nextQuest = document.getElementById("next-quest");                // next button
    const answFeedback = document.getElementById("answ-feedback");          // feedback element
    let score = parseInt(document.getElementById("score").innerHTML);       //sets the score to a number
    const answerButtons = document.getElementsByClassName("answ-btn");

    //checking the right answer, if answer right increase score giving feedbacks in any case
    if (clicked.dataset.correct === "true") {                               //if answer correct checks boolean
        answFeedback.innerText = "Correct";                                 // giving feeback in feedback container if correct
        score += 100;                                                       //increase score by 100

    } else {
        answFeedback.innerText = "Wrong"                                    //giving feedback in feedback container if wrong

    }
    document.getElementById("score").innerHTML = score;                     // setting the score
    nextQuest.classList.remove("hide");                                     // showing the next button
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].disabled = true;
    }                                            // disable answer buttons so cant increase score.
}

// Add event listener to the next button 
function nextButtonListener() {
    const answFeedback = document.getElementById("answ-feedback");          // gets the feedback container
    const nextQuest = document.getElementById("next-quest");                //gets next button
    nextQuest.addEventListener("click", function () {
        const answGrid = document.getElementById("answ-grid");              // answers container
        answGrid.innerHTML = "";                                            // resets answer container
        answFeedback.innerText = "";                                        // resets feedback container
        nextQuest.classList.add("hide");
        randomQuest(levels());                                              // Calls randomQuest again to display the next set of questions

    });
}
//creare una funzione per la fine del quiz dando il risultato e un pulsante per tornare indietro.
//create contenitore sotto il popup nella pagina easy
//function quizResult() {

//}


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
    }
];


