const display = document.getElementById("display");
let lastInput = "";

function showOnDisplay(input) {
    console.log(lastInput);
    if(input == "*" || input == "/" || input == "-" || input == "+") {
        if(lastInput == "*" || lastInput == "/" || lastInput == "-" || lastInput == "+") {
            console.log("double input");
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

//Function that clears the displayed values
function clr() {
    display.value = "";
}

function calculation() {
    console.log(display.value = eval(display.value));
}

