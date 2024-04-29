//make sure content is loaded and calls the popup
document.addEventListener("DOMContentLoaded", function () {
    contentLoaded();
});


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
        removeAndCreateChild();
        startCount();


        randomQuest(levels());
    });
}





//count down function
function startCount() {
    let timer = document.getElementById("timer"); // gets timer element
    let minute = 60; // 60 seconds timer
    let count = setInterval(function () {
        // when reaches 0 comesback to homepage
        if (minute <= 0) {    // checks when minute reaches 0
            clearInterval(count); // clear the count and set time out text in the time element
            timer.innerText = "Time Out!"
            setTimeout(function () {
                window.location.href = "index.html"; // redirect to homepage after 3sec 
            }, 3000);
            return;
        }
        // sets timer to 60 decreasing 1 every second
        timer.innerText = minute;
        minute--;
    }, 1000)
}
//function to remove the previous answ buttons
function removeAndCreateChild() {
    const answGrid = document.getElementById("answ-grid");  // gets the actual answer buttons in the html 

    //removing answer buttons
    const childrenRemove = Array.from(answGrid.children); // gets the children array from the answer buttons grid
    //function to remove the children
    childrenRemove.forEach(child => {
        if (child.classList.contains("btn-answ")) {
            answGrid.removeChild(child);
        }
    });
}

//get the level that we choose
function levels() {
    const page = window.location.pathname;
    if (page.includes("easy.html")) {
        return "easy";
    } else if (page.includes("normal.html")) {
        return "normal";
    } else if (page.includes("hard.html")) {
        return "hard";
    } else {
        alert("Page non reconized!!")
    }
}



//sets a random question depending on which level page we choose
function randomQuest(level) {
    let questions;
    if (level === "easy") {
        questions = questionEasy;
    } else if (level === "normal") {
        questions = questionNormal;
    } else if (level === "hard") {
        questions = questionHard;
    }
    //randomize questions and display it + display relative answers
    const random = Math.floor(Math.random() * questions.length);
    let questionBox = document.getElementById("questionBox"); // get element that we need to change
    let actualQuestion = questions[random]; // gets the current question
    questionBox.innerText = actualQuestion.question; // displays current question

    // display answers (looping through each of them) created by function as buttons
    actualQuestion.answers.forEach(function (answer) {
        let newButtons = document.createElement("button");  //new buttons
        newButtons.innerText = answer.text; //displays its text
        newButtons.classList.add("answ-btn"); //keep same class
        //sets correct  and false answers
        if (answer.correct) {
            newButtons.dataset.correct = true;
        } else {
            newButtons.dataset.correct = false;
        }
        
        let answGrid = document.getElementById("answ-grid");
        answGrid.appendChild(newButtons);


        /* i need to create function to check the correct answer and increse score.
        also i need to randomize the answers to dont get always the same order
*/





        //newButtons.addEventListener("click" , function() {
           // checkCorrectAnswer(newButtons);
        //})
    })
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
    },

    {
        question: "What was the birth name of boxing champion Muhammad Ali?",
        answers: [
            { text: "Cassius Clay", correct: true },
            { text: "Classius Kay", correct: false },
            { text: "Cashews Clame", correct: false }
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
    },

    {
        question: "When the Wow! Signal was detected?",
        answers: [
            { text: "1977", correct: true },
            { text: "1877", correct: false },
            { text: "1997", correct: false },
            { text: "1987", correct: false }
        ]
    }
];


