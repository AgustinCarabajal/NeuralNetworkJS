'use strict'

// var Perceptron = function (data) {
//   this.data = data
// }

// Perceptron.prototype.data = {}

const weightsCount = 3

var Perceptron = function (n = 3) {
  this.weights = []
  this.learningRate = 0.1

  this.weightsCount = n

  for(let i = 0; i < weightsCount; i++) {
    this.weights[i] = random(-1, 1)
  }
}

Perceptron.prototype = {
  guess: function(inputs) {
    let sum = 0
    for(let i = 0; i < weightsCount; i++) {
      sum += this.weights[i] * inputs[i]
    }
    return this.sign(sum)
  },

  // Activation function
  sign: function(val) {
    if(val > 0) {
      return 1
    } else {
      return -1
    }
  },

  train: function(inputs, target) {
    let guess = this.guess(inputs)
    let error = target - guess

    // Tune all the weights
    for(let i = 0; i < weightsCount; i++) {
      this.weights[i] += error * inputs[i] * this.learningRate
    }
  },

  guessY: function(x) {
    let w0 = this.weights[0]
    let w1 = this.weights[1]
    let w2 = this.weights[2]

    return -(w2 / w1) - (w0 / w1) * this.x
  }
}