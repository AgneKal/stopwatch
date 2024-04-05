const time = document.getElementById('timer');

const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnNew = document.getElementById('new');
const btnFix = document.getElementById('fix');

const timeList = document.querySelector('.time-list');

let timerID;

let initValue = [];

const timeToArray = () => {
    const arr = time.value.split(':')
    return arr;
}

const timer = () => {
    [hour, min, sec] = timeToArray();
    total = Number(hour) * 3600 + Number(min) * 60 + Number(sec);
    total--;
    hour = Math.floor(total / 3600);
    min = Math.floor((total % 3600) / 60);
    sec = ((total % 3600) % 60) % 60;
    time.value = `${String(hour).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')} `;
    if (total == 0) {
        clearInterval(timerID)
    }
}

const startTimer = () => {
    stopTimer();
    initValue = timeToArray();
    timerID = setInterval(timer, 1000);
}

const stopTimer = () => {
    clearInterval(timerID);
}

let resetCounting = () => {
    stopTimer();
    time.value = `${String(initValue[0]).padStart(2, '0')} : ${String(initValue[1]).padStart(2, '0')} : ${String(initValue[2]).padStart(2, '0')} `;
    timerID = setInterval(timer, 1000);
}

btnStart.onclick = startTimer;
btnStop.onclick = stopTimer;
btnNew.onclick = resetCounting;

btnFix.onclick = () => {
    const newTime = document.createElement("li");
    newTime.className = "fixed-time";
    newTime.textContent = time.value;
    timeList.appendChild(newTime);
}
