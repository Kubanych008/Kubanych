let timeLeft = 10;
let intervalId;
let answered = false;

const message = document.getElementById("message");
const Btn = document.getElementById("answerBtn");
const timer = document.getElementById("timer");

function updateTimer() {
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(intervalId);
        if (!answered) {
            message.textContent = "Сен кечиктиң!";
        }
    } else {
        timeLeft--;
    }
}


Btn.onclick = function () {
    if (!answered) {
        answered = true;
        clearInterval(intervalId);
        message.textContent = "Жооп бердим!";
    }
};

intervalId = setInterval(updateTimer, 1000);
