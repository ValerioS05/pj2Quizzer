document.addEventListener("DOMContentLoaded", function () {
    loadContent();
    getName();
});
function loadContent() {
    const popup = document.getElementById("popup");
    popup.classList.add("hide");
}
// getting the username before starting
function getName() {
    let letSGo = document.getElementById("get-username");           // get the lets go button
    let username = document.getElementById("username");             // input field 
    const levelButton = document.getElementById("button-div");      // level buttons
    // hiding the level buttons
    letSGo.classList.add("hide");                                   // hiding the lets go button
                                                     
    //adding event listener to check if input field is populated 
    username.addEventListener("input", function () {
        if (username.value.trim() !== "") {                         // check that input filed is not empty trim white spaces
            letSGo.classList.remove("hide");                      // showing the lets go button
        } else {
            letSGo.classList.add("hide");                           // if not empty shows the lets go button
        }
    })
    letSGo.addEventListener("click", function () {

        popup.classList.remove("hide");                             // remove hide class to show popup
        let gotName = document.getElementById("got-name");          // get unique span in the popup
        gotName.innerText = username.value;                         // sets the text of the span
        let name = username.value;
        localStorage.setItem("name", name);
    })
    const popup = document.getElementById("popup")
    username.addEventListener("keypress", function (press) {
        if (press.key === "Enter" && username.value.trim() !== "") {
            popup.classList.remove("hide")                      // showing the popup
            let gotName = document.getElementById("got-name");  // getting the span that will store the username
            gotName.innerText = username.value;                 // insert username inside the span 
            let name = username.value;
            localStorage.setItem("name", name);
        } else {
            popup.classList.add("hide");                           // if not empty shows the popup
        }
    })
    const quitPopup = document.getElementById("quit-popup");    // get the button at the bottom of the popup
    quitPopup.addEventListener("click", function (clicked) {     // adding listener to button when clicked
        if (clicked) {
            popup.classList.add("hide");                        // adding hide class to remove popup

        }
    })
}


