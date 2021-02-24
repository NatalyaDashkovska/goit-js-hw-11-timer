class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
}

const timerReverse = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 25, 2021'),
});

const start = () => {
  setInterval(() => {
    const currentTime = Date.now();
    const time = timerReverse.selector.targetDate - currentTime;
    updateTimer(time);
  }, 1000);
};

const updateTimer = time => {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minutesRef.textContent = mins;
  secondsRef.textContent = secs;
};
const pad = time => {
  return String(time).padStart(2, '0');
};
const daysRef = document.querySelector(`[data-value="days"]`);
const hoursRef = document.querySelector(`[data-value="hours"]`);
const minutesRef = document.querySelector(`[data-value="mins"]`);
const secondsRef = document.querySelector(`[data-value="secs"]`);
start();
