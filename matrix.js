'use strict'

const Matrix = function(rows, cols) {

  this.rows = rows
  this.cols = cols
  this.matrix = []

  this.init = function() {
    for (let i = 0; i < this.rows; i++) {
      this.matrix[i] = []
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] = 0
      }
    }
  }

  this.add = function (n) {
    if (n instanceof Matrix) {
      for (let i = 0; i < this.rows; i++) { 
        for (let j = 0; j < this.cols; j++) {
          this.matrix[i][j] += n.matrix[i][j]
        }
      }
    } else {
      for (let i = 0; i < this.rows; i++) { 
        for (let j = 0; j < this.cols; j++) {
          this.matrix[i][j] += n
        }
      }
    }
  }

  this.multiply = function (n) {
    for (let i = 0; i < this.rows; i++) { 
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] *= n
      }
    }
  }
}