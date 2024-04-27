// wait until page is loaded
// get the popup and change display style
document.addEventListener("DOMContentLoaded", function () {
    let popUp = document.getElementById("popup");
    popUp.style.display = "block";
    const nextQuest = document.getElementById("next-quest");
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
]
// quiz normal mode

const questionNormal = [
    {
        question: "",
        answers: [
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false }
        ]
    },

    {
        question: "",
        answers: [
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false }
        ]
    },

    {
        question: "",
        answers: [
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false }
        ]
    },

    {
        question: "",
        answers: [
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false }
        ]
    }
]


