// canvas.js

class Canvas {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d', { alpha: false })

    // bind this to class methods
    this.clearBackground = this.clearBackground.bind(this)
    this.loop = this.loop.bind(this)
    this.resize = this.resize.bind(this)

    this.resize();
    window.addEventListener('resize', this.resize)

    this.app = new App(canvas.width, canvas.height)
    requestAnimationFrame(this.loop)
  }

  clearBackground() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  loop(tick) {
    this.app.update(tick)
    this.clearBackground()
    this.app.draw(this.ctx, tick)
    requestAnimationFrame(this.loop)
  }

  resize(event) {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }
}
