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
    let name;                                                       // empty container to store username value
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

    })
    const popup = document.getElementById("popup")
    username.addEventListener("keypress", function(press) {
        if (press.key === "Enter" && username.value.trim() !== "") {
            popup.classList.remove("hide")                     // showing the lets go button
            let gotName = document.getElementById("got-name");
            gotName.innerText = username.value;
        } else {
            popup.classList.add("hide");                           // if not empty shows the lets go button
        }
        })
    const quitPopup = document.getElementById("quit-popup");
    quitPopup.addEventListener("click", function(clicked) {
        if (clicked) {
            popup.classList.add("hide"); 
            
        }
    })
}


