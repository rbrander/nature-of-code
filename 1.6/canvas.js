// canvas.js

class Canvas {
  constructor() {
    this.canvasElement = document.getElementById('canvas')
    this.ctx = this.canvasElement.getContext('2d', { alpha: false })

    // bind this to class methods
    this.clearBackground = this.clearBackground.bind(this)
    this.resize = this.resize.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)

    // instance variables
    this.width = this.canvasElement.width
    this.height = this.canvasElement.height
    this.mouseX = 0
    this.mouseY = 0

    this.resize();
    window.addEventListener('resize', this.resize)

    this.canvasElement.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove({ x, y }) {
    this.mouseX = x
    this.mouseY = y
  }

  clearBackground() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  resize(event) {
    // set the width/height instance variables as well as canvas element
    this.width = this.canvasElement.width = window.innerWidth
    this.height = this.canvasElement.height = window.innerHeight
  }
}
