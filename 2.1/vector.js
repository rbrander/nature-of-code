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

  set(x, y) {
    this.x = x
    this.y = y
    return this
  }

  copy() {
    return new Vector(this.x, this.y)
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

  // prevent the magnitude of a vector from exceeding the value provided
  limit(value) {
    if (this.mag() > value) {
      this.normalize().mult(value)
    }
    return this
  }


  // Static methods

  static add(vector1, vector2) {
    return vector1.copy().add(vector2)
  }

  static sub(vector1, vector2) {
    return vector1.copy().sub(vector2)
  }

  static mult(vector1, vector2) {
    return vector1.copy().mult(vector2)
  }

  static div(vector1, vector2) {
    return vector1.copy().div(vector2)
  }

  static normalize(vector) {
    return vector1.copy().normalize()
  }

  static random() {
    const randomAngle = Math.random() * (Math.PI * 2)
    return new Vector(Math.cos(randomAngle), Math.sin(randomAngle))
  }
}
