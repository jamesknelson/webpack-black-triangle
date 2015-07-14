export default class BlackTriangle {
  angle = 0;
  innerEl = document.createElement('div');

  constructor(selector) {
    this.innerEl.className = "BlackTriangle-inner";

    this.el = document.querySelector(selector)
    this.el.className = "BlackTriangle";
    this.el.appendChild(this.innerEl);
  }

  rotate(amount) {
    this.angle = (this.angle + amount) % 360;
  }

  render() {
    this.innerEl.style.transform = `rotate(${this.angle}deg)`;
  }
}
