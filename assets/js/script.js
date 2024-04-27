// wait until page is loaded
// get the popup and change display style
document.addEventListener("DOMContentLoaded", function () {
    let popUp = document.getElementById("popup");
    popUp.style.display = "block";
    nextQuest.classList.add("hide");

    //change display back to normal when press continue button

    let continueBtn = document.getElementById("continueBtn");
    continueBtn.addEventListener("click", function () {
        popUp.style.display = "none";

        //call countdown function when page fully loaded
        startCount();
    })
});
//countdown function
function startCount() {
    let timer = document.getElementById("timer");
    let minute = 60;

    let count = setInterval(function () {
        //when timer reach 0 reset to homepage after 3 sec delay 
        if (minute <= 0) {
            clearInterval(count);
            timer.innerText = "You lost";
            setTimeout(function () {
                window.location.href = "index.html";
            }, 3000);
            return;
        }

        timer.innerText = minute;
        minute--;
        // decrease 1 every second
    }, 1000)

}

//declaring variables to use

const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const answerButtons = document.getElementById("btn-answ");
const nextQuest = document.getElementById("next-quest");










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



