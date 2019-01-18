'use strict'

function f(x) {
  // y = mx + b
  return 0.3 * x + 0.2
}

function Point(_x = random(-1, 1), _y = random(-1, 1)) {
  this.x = _x
  this.y = _y
  this.bias = 1

  let lineY = f(this.x)

  this.target = this.y > lineY ? 1: -1

  this.getX = () => {
    return map(this.x, -1, 1, 0, width)
  }

  this.getY = () => {
    return map(this.y, -1, 1, height, 0)
  }

  this.show = function() {
    stroke(0)
    if(this.target === 1) {
      fill(255)
    } else {
      fill(0)
    }

    let px = this.getX()
    let py = this.getY()
    ellipse(px, py, 32, 32)
  }
}