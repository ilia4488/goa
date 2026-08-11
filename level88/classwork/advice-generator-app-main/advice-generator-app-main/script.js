const button = document.querySelector(".circle");
const adviceId = document.querySelector("b");
const adviceText = document.querySelector("p");

const API_URL = "https://api.adviceslip.com/advice";

async function getAdvice() {
    try {
        const response = await fetch(API_URL, { cache: "no-cache" });
        const data = await response.json();

        adviceId.textContent = `ADVICE #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.error("შეცდომა მონაცემების წამოღებისას:", error);
    }
}

button.addEventListener("click", getAdvice);