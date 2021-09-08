// vector.js

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add(vector) {
    this.x += vector.x
    this.y += vector.y
  }

  // scale the vector by multiplying its properties by a given value
  mult(value) {
    this.x *= value
    this.y *= value
  }

  static random() {
    const randomAngle = Math.random() * (Math.PI * 2)
    return new Vector(Math.cos(randomAngle), Math.sin(randomAngle))
  }
}
