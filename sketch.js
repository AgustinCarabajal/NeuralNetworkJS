'use strict'

function setup() {
  createCanvas(600, 600)
  const test = new Test()

  // test.matrixTest()
  // test.feedForwardTest()
  // test.backPropagationTest()

  let training_data = [{
      inputs: [0, 0],
      targets: [0]
  }, {
      inputs: [1, 1],
      targets: [0]
  }, {
      inputs: [0, 1],
      targets: [1]
  }, {
      inputs: [1, 0],
      targets: [1]
  }]
  
  test.testData(training_data)

}

function draw() {
  background(51)

}
