'use strict'

const NeuralNetwork = function(numI, numH, numO) {
  this.input_nodes = numI
  this.hidden_nodes = numH
  this.output_nodes = numO

  this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes).randomize()
  this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes).randomize()

  this.bias_h = new Matrix(this.hidden_nodes, 1).randomize()
  this.bias_0 = new Matrix(this.output_nodes, 1).randomize()

  this.learning_rate = 0.1

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

  this.train = function(inputs, targets) {
    // Generating the Hidden Outputs
    inputs = Matrix.fromArray(inputs)
    let hidden = Matrix.multiply(this.weights_ih, inputs)
    hidden.add(this.bias_h)
    // Activation function
    hidden.map(sigmoid)
    // let outputs = this.feedForward(inputs)

    // Generating the output's output
    let outputs = Matrix.multiply(this.weights_ho, hidden)
    outputs.add(this.bias_0)
    outputs.map(sigmoid)

    // Convert array to matrix object
    // outputs = Matrix.fromArray(outputs)
    targets = Matrix.fromArray(targets)

    // Calculate the error -> ERROR = TARGETS - OUTPUTS
    let output_errors = Matrix.subtract(targets, outputs)

    // Calculate the gradient
    let output_gradient = Matrix.map(outputs, dSigmoid)
    output_gradient.multiply(output_errors)
    output_gradient.multiply(this.learning_rate)

    // Calculate the Deltas
    let hidden_t = Matrix.transpose(hidden)
    let delta_weights_ho = Matrix.multiply(output_gradient, hidden_t)

    // Adjust the weights by deltas
    this.weights_ho.add(delta_weights_ho)
    // Adjust the bias by its deltas (which is just the gradients)
    this.bias_0.add(output_gradient)

    // Calculate the hidden layer errors
    let weights_ho_t = Matrix.transpose(this.weights_ho)
    let hidden_errors = Matrix.multiply(weights_ho_t, output_errors)

    // Calculate hidden gradient
    let hidden_gradient = Matrix.map(hidden, dSigmoid)
    hidden_gradient.multiply(hidden_errors)
    hidden_gradient.multiply(this.learning_rate)

    // Calculate hidden Deltas
    let inputs_t = Matrix.transpose(inputs)
    let delta_weights_ih = Matrix.multiply(hidden_gradient, inputs_t)

    // Adjust the weights by deltas
    this.weights_ih.add(delta_weights_ih)
    // Adjust the bias by its deltas (which is just the gradients)
    this.bias_h.add(hidden_gradient)

    // outputs.print()
    // targets.print()
    // output_errors.print()
  }

}

const sigmoid = function(x) {
  return 1 / (1 + Math.exp(-x))
}

const dSigmoid = function(y) {
  return y * (1 - y)
}
