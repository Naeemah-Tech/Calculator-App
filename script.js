const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value.replace(/x/g, '*')
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

function deleteFigure() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function(e) {
    const key = e.key;

    if (key >= 0 && key <= 9 || key === ".") {
        appendToDisplay(key);
    } 
    
    else if (key === "+" || key === "-" || key === "/") {
        appendToDisplay(key);
    }

    else if (key === "*" || key.toLowerCase() === "x") {
        appendToDisplay("x");
    }

    else if (key === "Enter" || key === "=") {
        e.preventDefault();
        calculate();
    }

    else if (key === "Backspace") {
        deleteFigure();
    }

    else if (key === "Escape" || key === "Delete") {
        clearDisplay();
    }
})

const themeSwitch  = document.querySelector(".switch-track");

function switchTheme() {
    let currentTheme = document.documentElement.getAttribute("data-theme") || "1";

    let nextTheme;

    if (currentTheme === "1") {
        nextTheme = "2";
    } else if (currentTheme === "2") {
        nextTheme = "3";
    } else {
        nextTheme = "1";
    }

    document.documentElement.setAttribute("data-theme", nextTheme);
}

themeSwitch.addEventListener("click", switchTheme)