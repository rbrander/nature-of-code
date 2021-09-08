// walker.js

class Walker {
  constructor(x, y) {
    this.pos = new Vector(~~x, ~~y)
    this.vel = Vector.random()
    this.vel.mult(Math.random() * 3)

    // bind this to class methods
    this.update = this.update.bind(this)
    this.draw = this.draw.bind(this)
  }

  update(tick) {
    this.pos = Vector.add(this.pos, this.vel)
    // this.pos.add(this.vel)
  }

  draw(ctx, tick) {
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 2
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, 32, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()
  }
}