const display = document.getElementById("display");

function showOnDisplay(input) {
    display.value += input;
}

//Function that clears the displayed values
function clr() {
    display.value = "";
}

function calculation() {
    console.log(display.value = eval(display.value));
}

