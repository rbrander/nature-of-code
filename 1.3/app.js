// app.js

class App {
  constructor(width, height) {
    this.canvasHalfWidth = ~~(width / 2)
    this.canvasHalfHeight = ~~(height / 2)
    this.walker = new Walker(this.canvasHalfWidth, this.canvasHalfHeight)

    // bind this to class methods
    this.update = this.update.bind(this)
    this.draw = this.draw.bind(this)
  }

  update(tick) {
    this.walker.update(tick)
  }

  draw(ctx, tick) {
    this.walker.draw(ctx, tick)
  }
}
