'use strict'

let r, g, b
let brain
let which = 'black'
let outputs = []

function setup() {
  createCanvas(600, 300)
  noLoop()

  brain = new NeuralNetwork(3, 3, 2)

  for (let i = 0; i < 50000; i ++) {
    let r = random(255)
    let g = random(255)
    let b = random(255)
    let targets = trainColor(r, g, b)
    let inputs = [r / 255, g / 255, b / 255]

    brain.train(inputs, targets)
  }

  pickColor()
  
}

function draw() {
  background(r, g, b)
  stroke(0)
  line(width / 2, height, width / 2, 0)

  textSize(64)
  noStroke()
  fill(0)
  textAlign(CENTER)
  text('Black', 150, 150)
  textSize(24)
  text(`${outputs[0]}`, 150, 290)
  fill(255)
  textSize(64)
  text('White', 450, 150)
  textSize(24)
  text(`${outputs[1]}`, 450, 290)

  which = colorPredictor(r, g, b)
  if (which === 'black') {
    fill(0)
    ellipse(150, 200, 60)
  } else {
    fill(255)
    ellipse(450, 200, 60)
  }

}

function colorPredictor(r, g, b) {
  
  let inputs = [r / 255, g / 255, b /255]
  outputs = brain.predict(inputs)
  console.log(outputs)

  if (outputs[0] > outputs[1]) {
    return 'black'
  } else {
    return 'white'
  }
  
  // if (r + b + g > 300) {
  //   return 'black'
  // } else {
  //   return 'white'
  // }
}

function trainColor(r, g, b) {
  if (r + b + g > (255 * 3) / 2) {
    return [1, 0]
  } else {
    return [0, 1]
  }
}

function pickColor() {
  r = random(255)
  g = random(255)
  b = random(255)

  redraw()
}

function mousePressed() {
  // let targets = []
  // if (mouseX > width / 2) {
  //   targets = [0, 1]
  // } else {
  //   targets = [1, 0]
  // }

  // let inputs = [r / 255, g / 255, b /255]

  // brain.train(inputs, targets)

  pickColor()
}