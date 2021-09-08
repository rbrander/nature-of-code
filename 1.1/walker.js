// walker.js

class Walker {
  constructor(x, y) {
    this.pos = new Vector(~~x, ~~y)

    // bind this to class methods
    this.update = this.update.bind(this)
    this.draw = this.draw.bind(this)
  }

  update(tick) {
    // pick a random direction to go
    this.pos.x += Math.round(Math.random() * 2) - 1 // number between -1 and 1
    this.pos.y += Math.round(Math.random() * 2) - 1
  }

  draw(ctx, tick) {
    ctx.strokeStyle = 'white'
    ctx.strokeRect(this.pos.x, this.pos.y, 1, 1)
  }
}