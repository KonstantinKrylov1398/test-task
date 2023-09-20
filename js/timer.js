let seconds = 16;
let minutes = 51;
let hours = 4;
let timer;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimer() {
    seconds--;

    if (seconds == 0) {
        seconds = 60;
        minutes--;

        if (minutes == 0) {
            minutes = 60;
            hours--;
        }
    }

    const timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    return document.getElementById("timer").textContent = timeString;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

startTimer()