'use strict'

// var Perceptron = function (data) {
//   this.data = data
// }

// Perceptron.prototype.data = {}

const weights = 2

var Perceptron = function () {
  this.weights = []
  this.learningRate = 0.1

  for(let i = 0; i < weights; i++) {
    this.weights[i] = random(-1, 1)
  }
}

Perceptron.prototype = {
  guess: function(inputs) {
    let sum = 0
    for(let i = 0; i < weights; i++) {
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
    for(let i = 0; i < weights; i++) {
      this.weights[i] += error * inputs[i] * this.learningRate
    }
  }
}