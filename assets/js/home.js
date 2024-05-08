document.addEventListener("DOMContentLoaded", function () {
    loadContent();
    getName();
});
function loadContent() {
    const popup = document.getElementById("popup");                                 // get popup
    popup.classList.add("hide");                                                    // hid the popup
}
// getting the username before starting
function getName() {
    let letSGo = document.getElementById("get-username");                           // get the lets go button
    let username = document.getElementById("username");                             // input field 
    const levelButton = document.getElementById("button-div");                      // level buttons

    // hiding the level buttons
    letSGo.classList.add("hide");                                                   // hiding the lets go button

    // Function to check user input and remove special characters
    function validateInput() {
        let input = username.value.trim();                                          // Get the trimmed value
        let newInput = input.replace(/[^A-Za-z0-9]/g, '');                          // accept only numbers or letters
        if (input !== newInput) {                                                   //
            username.value = newInput;                                              // Update the input value
        }
        // Enable or disable the "Lets Go" button based on input
        if (newInput !== "") {
            letSGo.classList.remove("hide");
        } else {
            letSGo.classList.add("hide");
        }
    }

    // Event listener for the input event on the username input field
    username.addEventListener("input", function (event) {
        validateInput();
    });
    
    // Event listener for the Enter key press on the username input field
    username.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            validateInput(); // Call the validateInput function
            if (!letSGo.classList.contains("hide") && username.value.trim() !== "") {
                letSGo.click(); // Trigger the "Let's Go" button click if validation succeeds
            }
        }
    });
    // Event listener for the "Let's Go" button click
    letSGo.addEventListener("click", function () {
        const popup = document.getElementById("popup");
        popup.classList.remove("hide");
        let gotName = document.getElementById("got-name");
        gotName.innerText = username.value.trim();
        localStorage.setItem("name", username.value.trim());
    });
}


