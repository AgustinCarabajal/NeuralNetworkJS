'use strict'

const NeuralNetwork = function(numI, numH, numO) {
  this.input_nodes = numI
  this.hidden_nodes = numH
  this.output_nodes = numO

  this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes).randomize()
  this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes).randomize()

  this.bias_h = new Matrix(this.hidden_nodes, 1).randomize()
  this.bias_0 = new Matrix(this.output_nodes, 1).randomize()

  this.feedForward = function(input) {

    // Generating the Hidden Outputs
    let arr = Matrix.fromArray(input)
    let hidden = Matrix.multiply(this.weights_ih, arr)
    hidden.add(this.bias_h)
    // Activation function
    hidden.map(sigmoid)

    // Generating the actual output
    let output = Matrix.multiply(this.weights_ho, hidden)
    output.add(this.bias_0)
    output.map(sigmoid)

    return output.toArray()

  }

}

const sigmoid = function(x) {
  return 1 / (1 + Math.exp(-x))
}
