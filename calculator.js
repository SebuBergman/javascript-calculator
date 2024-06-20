const display = document.getElementById("display");
let lastInput = "";

// Function for displaying input and checking for double operator inputs
function showOnDisplay(input) {
    if(input === "*" || input == "/" || input == "-" || input == "+") {
        if(lastInput == "*" || lastInput == "/" || lastInput == "-" || lastInput == "+") {
            lastInput = input;
        } else {
            display.value += input;
            lastInput = input;
        }
    } else {
        display.value += input;
        lastInput = input;
    }
}

// Function that clears the displayed values
function clr() {
    display.value = "";
}

// Function for calculations using javascript eval function
function calculation() {
    display.value = eval(display.value);
}

