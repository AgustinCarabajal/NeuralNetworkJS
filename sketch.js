'use strict'

let brain

function setup() {
  createCanvas(600, 600)

  brain = new NeuralNetwork(3, 3, 1)
}

function draw() {
  background(51)

}
