// mover.js

class Mover {
  constructor(x, y, mass) {
    this.pos = new Vector(~~x, ~~y)
    this.vel = new Vector(0, 0)
    this.acc = new Vector(0, 0)
    this.radius = Math.sqrt(mass) * 10
    this.mass = mass

    // bind this to class methods
    this.update = this.update.bind(this)
    this.draw = this.draw.bind(this)
  }

  update(tick, mouseIsPressed) {
    // determine acceleration
    this.acc = this.acc.set(0, 0)

    const gravity = new Vector(0, 0.2)
    this.acc.add(gravity)

    if (mouseIsPressed) {
      const wind = new Vector(0.1, 0).div(this.mass)
      this.acc.add(wind)
    }

    // integrate acceleration and velocity
    this.vel.add(this.acc)
    this.pos.add(this.vel)

    // bounds check
    if (this.pos.y > window.innerHeight - this.radius) {
      this.pos.y = window.innerHeight - this.radius
      this.vel.y *= -1
    } else if (this.pos.y < this.radius) {
      this.pos.y = this.radius
      this.vel.y *= -1
    }
    if (this.pos.x > window.innerWidth - this.radius) {
      this.pos.x = window.innerWidth - this.radius
      this.vel.x *= -1
    } else if (this.pos.x < this.radius) {
      this.pos.x = this.radius
      this.vel.x *= -1
    }
  }

  draw(ctx, tick) {
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 2
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()
  }
}