class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();

      const time = this.targetDate - currentTime;

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

    document.querySelector(
      this.selector,
    ).children[0].children[0].textContent = `${days}`;
    document.querySelector(
      this.selector,
    ).children[1].children[0].textContent = `${hours}`;
    document.querySelector(
      this.selector,
    ).children[2].children[0].textContent = `${mins}`;
    document.querySelector(
      this.selector,
    ).children[3].children[0].textContent = `${secs}`;
  }
  pad(time) {
    return String(time).padStart(2, '0');
  }
}

const timerReverse = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 25, 2021'),
});
const timerReverse2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jan 25, 2021'),
});
