document.addEventListener("DOMContentLoaded", function () {
    let popUp = document.getElementById("popup");
    popUp.style.display = "block"


    let continueBtn = document.getElementById("continueBtn");
    continueBtn.addEventListener("click", function () {
        popUp.style.display = "none";


        startCount();
    })
});

function startCount() {
    let timer = document.getElementById("timer");
    let minute = 60;

    let count = setInterval(function () {

        if (minute <= 0 ) {
            clearInterval(count);
            timer.innerText = "You lost";
            setTimeout (function () {
                window.location.href = "index.html";
            }, 2000);
            return;
        }

        timer.innerText = minute;
        minute--;
    },1000)

}

