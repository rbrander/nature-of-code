// app.js

class App {
  constructor(canvas) {
    this.canvas = canvas
    this.canvasHalfWidth = ~~(canvas.width / 2)
    this.canvasHalfHeight = ~~(canvas.height / 2)
    this.moverA = new Mover(this.canvasHalfWidth / 2, this.canvasHalfHeight, 2)
    this.moverB = new Mover(this.canvasHalfWidth * 1.5, this.canvasHalfHeight, 4)

    // bind this to class methods
    this.update = this.update.bind(this)
    this.draw = this.draw.bind(this)
    this.loop = this.loop.bind(this)
    requestAnimationFrame(this.loop)
  }

  loop(tick) {
    this.update(tick)
    this.draw(tick)
    requestAnimationFrame(this.loop)
  }

  update(tick) {
    this.moverA.update(tick, this.canvas.mouseIsPressed)
    this.moverB.update(tick, this.canvas.mouseIsPressed)
  }

  draw(ctx, tick) {
    this.canvas.clearBackground()
    this.moverA.draw(this.canvas.ctx, tick)
    this.moverB.draw(this.canvas.ctx, tick)
  }
}
