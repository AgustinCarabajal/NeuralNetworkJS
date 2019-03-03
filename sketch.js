'use strict'

function setup() {
  createCanvas(600, 600)
  const test = new Test()
  
  // test.matrixTest()

  let nn = new NeuralNetwork(2, 2, 1)

  let input = [1, 0]

  let output = nn.feedForward(input)

  console.log(output)

}

function draw() {
  background(51)

}
