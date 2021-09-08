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

  static add(vector1, vector2) {
    const newVector = new Vector(vector1.x, vector1.y)
    newVector.add(vector2)
    return newVector
  }

  static random() {
    const randomAngle = Math.random() * (Math.PI * 2)
    return new Vector(Math.cos(randomAngle), Math.sin(randomAngle))
  }
}
