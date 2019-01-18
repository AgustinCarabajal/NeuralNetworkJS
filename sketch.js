'use strict'

const totalPoints = 10
let perceptron
let points = []

function setup() {
  createCanvas(600, 600)

  let inputs = [1, -0.5]
  perceptron = new Perceptron(3)
  let output = perceptron.guess(inputs)

  for(let i = 0; i < totalPoints; i++) {
    points[i] = new Point()
  }
}

function draw() {
  background(51)
  stroke(0)

  let p1 = new Point(-1, f(-1))
  let p2 = new Point(1, f(1))
  line(p1.getX(), p1.getY(), p2.getX(), p2.getY())

  let p3 = new Point(-1, perceptron.guessY(-1))
  let p4 = new Point(1, perceptron.guessY(1))
  line(p3.getX(), p3.getY(), p4.getX(), p4.getY())

  for(let p of points) {
    p.show()
  }

  for (let p of points) {
    // perceptron.train([p.x, p.y], p.target)
    let guess = perceptron.guess([p.x, p.y, p.bias])
    if (guess === p.target) {
      fill(0, 255, 0)
    } else {
      fill(255, 0, 0)
    }
    noStroke()
    ellipse(p.getX(), p.getY(), 16, 16)
  }
}

function mousePressed() {
  for (let p of points) {
    perceptron.train([p.x, p.y, p.bias], p.target)
    let guess = perceptron.guess([p.x, p.y, p.bias])
    if (guess === p.target) {
      fill(0, 255, 0)
    } else {
      fill(255, 0, 0)
    }
    noStroke()
    ellipse(p.x, p.y, 16, 16)
  }
}