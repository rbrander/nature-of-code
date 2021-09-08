// app.js

class App {
  constructor(canvas) {
    this.canvas = canvas
    this.canvasHalfWidth = ~~(canvas.width / 2)
    this.canvasHalfHeight = ~~(canvas.height / 2)
    this.mover = new Mover(this.canvasHalfWidth, this.canvasHalfHeight)

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
    const { mouseX, mouseY } = this.canvas
    this.mover.update(tick, mouseX, mouseY)
  }

  draw(ctx, tick) {
    this.canvas.clearBackground()
    this.mover.draw(this.canvas.ctx, tick)
  }
}
