let counterElement = document.getElementById("counterValue");
let bgContainer = document.getElementById("bg-cont");


function decrease() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;
    counterElement.style.color = "white";
    bgContainer.style.backgroundColor = "lightgreen";
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}

function reset() {
    let updatedCounterValue = 0;
    counterElement.textContent = updatedCounterValue;
    counterElement.style.color = "black";
    bgContainer.style.backgroundColor = "white";

}

function increase() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;

    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    bgContainer.style.backgroundColor = "lightyellow";
}