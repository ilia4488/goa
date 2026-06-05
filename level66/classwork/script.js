// დავალება 1
const btnText = document.getElementById("btn-text");
const textParagraph = document.getElementById("text");

btnText.addEventListener("click", function() {
    textParagraph.textContent = "ტექსტი შეიცვალა!";
    textParagraph.style.color = "blue";
});

// დავალება 2
const btnBox = document.getElementById("btn-box");
const boxDiv = document.getElementById("box");

btnBox.addEventListener("click", function() {
    boxDiv.style.width = "300px";
    boxDiv.style.backgroundColor = "green";
});

// დავალება 3
const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");
const counterDisplay = document.getElementById("counter");

let count = 0;

btnPlus.addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
});

btnMinus.addEventListener("click", function() {
    count--;
    counterDisplay.textContent = count;
});