// wait until page is loaded
// get the popup and change display style
document.addEventListener("DOMContentLoaded", function () {
    let popUp = document.getElementById("popup");
    popUp.style.display = "block"

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
        if (minute <= 0 ) {
            clearInterval(count);
            timer.innerText = "You lost";
            setTimeout (function () {
                window.location.href = "index.html";
            }, 3000);
            return;
        }

        timer.innerText = minute;
        minute--;
    // decrease 1 every second
    },1000)

}

