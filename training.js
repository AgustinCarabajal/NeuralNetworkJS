'use strict'

function Point() {
  this.x = random(width)
  this.y = random(height)
  this.target = this.x > this.y? 1: -1

  this.show = function() {
    stroke(0)
    if(this.target === 1) {
      fill(255)
    } else {
      fill(0)
    }
    ellipse(this.x, this.y, 32, 32)
  }
}