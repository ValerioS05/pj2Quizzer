document.addEventListener("DOMContentLoaded", function () {
    //loadContent();
    getName();
});
//function loadContent() {
//const popup = document.getElementById("popup");
//} 
// getting the username before starting
function getName() {
    let letSGo = document.getElementById("get-username");           // get the lets go button
    let username = document.getElementById("username");             // input field 
    const levelButton = document.getElementById("button-div");      // level buttons
    levelButton.classList.add("hide");                              // hiding the level buttons
    letSGo.classList.add("hide");                                   // hiding the lets go button
    let name;                                                       // empty container to store username value
    //adding event listener to check if input field is populated 
    username.addEventListener("input", function () {    
        if (username.value !== "") {                                // check that input filed is not empty
            letSGo.classList.remove("hide");                        // showing the lets go button
        } else {
            letSGo.classList.add("hide");                           // if not empty shows the lets go button
        }
    })
    letSGo.addEventListener("click", function () {
        name = username.value;
        console.log(name);
    })
}

