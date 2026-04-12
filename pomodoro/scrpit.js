let time = 25 * 60;
let timer;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    if (timer) return;

    timer = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    time = 25 * 60;
    updateDisplay();
}

// Initialize display
updateDisplay();