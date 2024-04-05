const time = document.getElementById('timer');

const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnNew = document.getElementById('new');
const btnFix = document.getElementById('fix');

const timeList = document.querySelector('.time-list');

let timerID;

let [hours, min, sec, milisec] = [0, 0, 0, 0];

const stopwatch = () => {
    milisec += 10;
    if (milisec == 1000) {
        milisec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hours++;
            }
        }
    }
    time.textContent = `${String(hours).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')} : ${String(milisec).padStart(3, '0')}`;
}


const startTimer = () => {
    timerID = setInterval(stopwatch, 10);
}

btnStart.onclick = startTimer;

const stopTimer = () => {
    clearInterval(timerID);
}

btnStop.onclick = stopTimer;

let resetCounting = () => {
    clearInterval(timerID);
    [hours, min, sec, milisec] = [0, 0, 0, 0]
    time.textContent = `${String(hours).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')} : ${String(milisec).padStart(3, '0')}`;
    timeList.innerHTML = '';

}

btnNew.onclick = resetCounting;

btnFix.onclick = () => {
    const fixedTime = document.createElement("li");
    fixedTime.className = "fixed-time";
    fixedTime.textContent = `${String(hours).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')} : ${String(milisec).padStart(3, '0')}`;
    timeList.appendChild(fixedTime);
}
