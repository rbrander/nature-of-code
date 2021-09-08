// canvas.js

class Canvas {
  constructor() {
    this.canvasElement = document.getElementById('canvas')
    this.ctx = this.canvasElement.getContext('2d', { alpha: false })

    // bind 'this' to class methods
    this.resize = this.resize.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.clearBackground = this.clearBackground.bind(this)

    // event handlers
    this.resize();
    window.addEventListener('resize', this.resize)
    this.canvasElement.addEventListener('mousemove', this.onMouseMove)
    this.canvasElement.addEventListener('mouseup', this.onMouseUp)
    this.canvasElement.addEventListener('mousedown', this.onMouseDown)

    // instance variables
    this.mouseIsPressed = false
    this.width = this.canvasElement.width
    this.height = this.canvasElement.height
    this.mouseX = ~~(this.width / 2)
    this.mouseY = ~~(this.height / 2)
  }

  onMouseMove({ x, y }) {
    this.mouseX = x
    this.mouseY = y
  }

  onMouseUp(event) {
    this.mouseIsPressed = false
  }

  onMouseDown(event) {
    this.mouseIsPressed = true
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
