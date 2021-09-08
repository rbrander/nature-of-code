// vector.js

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  // Instance methods

  add(vector) {
    this.x += vector.x
    this.y += vector.y
    return this
  }

  sub(vector) {
    this.x -= vector.x
    this.y -= vector.y
    return this
  }

  // scale the vector by multiplying its properties by a given value
  mult(value) {
    this.x *= value
    this.y *= value
    return this
  }

  div(value) {
    this.x /= value
    this.y /= value
    return this
  }

  normalize() {
    const length = this.mag()
    if (length > 1) {
      this.div(length)
    }
    return this
  }

  // return the magnitude by using pythagorean theorm
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  setMag(value) {
    this.normalize().mult(value)
  }


  // Static methods

  static add(vector1, vector2) {
    return new Vector(vector1.x, vector1.y).add(vector2)
  }

  static sub(vector1, vector2) {
    return new Vector(vector1.x, vector1.y).sub(vector2)
  }

  static mult(vector1, vector2) {
    return new Vector(vector1.x, vector1.y).mult(vector2)
  }

  static div(vector1, vector2) {
    return new Vector(vector1.x, vector1.y).div(vector2)
  }

  static normalize(vector) {
    return new Vector(vector1.x, vector1.y).normalize()
  }

  static random() {
    const randomAngle = Math.random() * (Math.PI * 2)
    return new Vector(Math.cos(randomAngle), Math.sin(randomAngle))
  }
}
