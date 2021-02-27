const daysRef = document.querySelector(`[data-value="days"]`);
const hoursRef = document.querySelector(`[data-value="hours"]`);
const minutesRef = document.querySelector(`[data-value="mins"]`);
const secondsRef = document.querySelector(`[data-value="secs"]`);

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();

      const time = this.selector.targetDate - currentTime;

      this.updateTimer(time);
    }, 1000);
  }

  updateTimer(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minutesRef.textContent = mins;
    secondsRef.textContent = secs;
  }
  pad(time) {
    return String(time).padStart(2, '0');
  }
}

const timerReverse = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 25, 2021'),
});
