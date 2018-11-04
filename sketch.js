'use strict'

const totalPoints = 10
let perceptron
let points = []

function setup() {
  createCanvas(600, 600)

  let inputs = [1, -0.5]
  perceptron = new Perceptron()
  let output = perceptron.guess(inputs)
  console.log(output)

  for(let i = 0; i < totalPoints; i++) {
    points[i] = new Point()
  }
}

function draw() {
  background(51)

  for(let p of points) {
    p.show()
  }

  for (let p of points) {
    // perceptron.train([p.x, p.y], p.target)
    let guess = perceptron.guess([p.x, p.y])
    if (guess === p.target) {
      fill(0, 255, 0)
    } else {
      fill(255, 0, 0)
    }
    noStroke()
    ellipse(p.x, p.y, 16, 16)
  }
}

function mousePressed() {
  for (let p of points) {
    perceptron.train([p.x, p.y], p.target)
    let guess = perceptron.guess([p.x, p.y])
    if (guess === p.target) {
      fill(0, 255, 0)
    } else {
      fill(255, 0, 0)
    }
    noStroke()
    ellipse(p.x, p.y, 16, 16)
  }
}