function contentLoaded() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    const nextQuest = document.getElementById("next-quest");
    nextQuest.classList.add("hide");

    const continueBtn = document.getElementById("continueBtn");


    // Change display back to normal when press popup`s continue button,
    // and call countdown function.

    continueBtn.addEventListener("click", function () {
        popup.style.display = "none";

        //calling functions to operate the quiz

        startCount();

    });
}

//make sure content is loaded and calls the popup
document.addEventListener("DOMContentLoaded", contentLoaded);
document.addEventListener("DOMContentLoaded", function () {
    start();
})


//count down function
function startCount() {
    let timer = document.getElementById("timer");
    let minute = 60; // 60 seconds timer
    let count = setInterval(function () {
        // when reaches 0 comesback to homepage
        if (minute <= 0) {
            clearInterval(count);
            timer.innerText = "Time Out!"
            setTimeout(function () {
                window.location.href = "index.html";
            }, 3000);
            return;
        }
        // sets timer to 60 decreasing 1 every second
        timer.innerText = minute;
        minute--;
    }, 1000)
}

function start() {
    const answGrid = document.getElementById("answ-grid");

    //removing answer buttons
    const childrenRemove = Array.from(answGrid.children);
    childrenRemove.forEach(child => {
        if (child.classList.contains("btn-answ")) {
            answGrid.removeChild(child);
        }
    });

    //shuffle the array
    //get random question displayed on page
    let randomQuestion = questionEasy.sort(() => Math.random() - 0.5);
    let currentQuestion = 0;
    let questionBox = document.getElementById("questionBox");
    let actualQuestion = randomQuestion[currentQuestion];
    questionBox.innerText = actualQuestion.question;

    //get answers displayed on page
    //set which answer is correct
    actualQuestion.answers.forEach(function (answer) {
        const newButtons = document.createElement("button");
        newButtons.innerText = answer.text;
        newButtons.classList.add("answ-btn");
        if (answer.correct) {
            newButtons.dataset.correct = answer.correct;
        } else {
            newButtons.dataset.correct = false;
        }

        newButtons.addEventListener("click", function () {
            checkCorrectAnswer(newButtons);
        })
        answGrid.appendChild(newButtons);
    });
}
//check correct answer
function checkCorrectAnswer(clickedButton) {
    const answCorrect = clickedButton.dataset.correct === "true";
    const answFeedback = document.getElementById("answ-feedback");
    const nextQuest = document.getElementById("next-quest");
    if (answCorrect) {
        answFeedback.innerText = "Correct!"
        nextQuest.classList.remove("hide");
        console.log("correct");

    } else {
        answFeedback.innerText = "Wrong!"
        console.log("wrong");
        nextQuest.classList.remove("hide");
    }
}
// 3 array for different levels


// quiz array easy
const questionEasy = [
    {
        question: "How many days are in a year?",
        answers: [
            { text: "365", correct: true },
            { text: "536", correct: false }
        ]
    },

    {
        question: "How many continents are there in the world?",
        answers: [
            { text: "12", correct: false },
            { text: "7", correct: true }
        ]
    },

    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo DaVinci", correct: true },
            { text: "Leonardo DiCaprio", correct: false }
        ]
    },

    {
        question: "What is the highest mountain in our planet?",
        answers: [
            { text: "Everest", correct: true },
            { text: "Mt. Blanc", correct: false }
        ]
    },

    {
        question: "How many oceans are there?",
        answers: [
            { text: "5", correct: true },
            { text: "15", correct: false }
        ]
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
        ]
    },

    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "Mercury", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Earth", correct: false }
        ]
    },

    {
        question: "Which planet in our solar system is the hottest?",
        answers: [
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false }
        ]
    },

    {
        question: "Kratos is the main character of which video game?",
        answers: [
            { text: "God Of War", correct: true },
            { text: "Fallout", correct: false },
            { text: "Last of Us", correct: false }
        ]
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
        ]
    },

    {
        question: "What is the 4th letter of the Greek alphabet?",
        answers: [
            { text: "Delta", correct: true },
            { text: "Gamma", correct: false },
            { text: "Alpha", correct: false },
            { text: "Beta", correct: false }
        ]
    },

    {
        question: "Which Renaissance artist is buried in Rome's Pantheon?",
        answers: [
            { text: "Raphael", correct: true },
            { text: "Michelangelo", correct: false },
            { text: "Donatello", correct: false },
            { text: "Leonardo DaVinci", correct: false }
        ]
    },

    {
        question: "Who wrote the ballet Swan Lake?",
        answers: [
            { text: "Tchaikovsky", correct: true },
            { text: "Mozart", correct: false },
            { text: "Beethoven", correct: false },
            { text: "Bach", correct: false }
        ]
    }
];


