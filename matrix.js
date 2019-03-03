'use strict'

class Matrix {

  constructor(rows, cols) {
    this.rows = rows
    this.cols = cols
    this.data = []

    for (let i = 0; i < this.rows; i++) {
      this.data[i] = []
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = 0
      }
    }
  }

  randomize() {
    for (let i = 0; i < this.rows; i++) {
      this.data[i] = []
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.floor(Math.random() * 10)
      }
    }

    return this
  }

  add(n) {
    if (n instanceof Matrix) {
      for (let i = 0; i < this.rows; i++) { 
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n.data[i][j]
        }
      }
    } else {
      for (let i = 0; i < this.rows; i++) { 
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n
        }
      }
    }

    return this
  }

  multiply(n) {

    // Scalar product
    for (let i = 0; i < this.rows; i++) { 
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] *= n
      }
    }

    return this
  }

  map(fn) {
    for (let i = 0; i < this.rows; i++) { 
      for (let j = 0; j < this.cols; j++) {
        let val = this.data[i][j]
        this.data[i][j] = fn(val)
      }
    }

    return this
  }

  print() {
    console.table(this.data)
  }

  // Static Methods

  static multiply(m1, m2) {
    // Matrix product
    if (m1.cols !== m2.rows) {
      console.log('Error!')
      return
    }

    let result = new Matrix(m1.rows, m2.cols)
    for (let i = 0; i < result.rows; i++) { 
      for (let j = 0; j < result.cols; j++) {
        // Dot product of values
        let sum = 0
        for (let k = 0; k < m1.cols; k++) {
          sum += m1.data[i][k] * m2.data[k][j]
        }
        result.data[i][j] = sum
      }
    }
    return result
  }

  static transpose(m) {
    let result = new Matrix(m.cols, m.rows)

    for (let i = 0; i < m.rows; i++) { 
      for (let j = 0; j < m.cols; j++) {
        result.data[j][i] = m.data[i][j]
      }
    }

    return result
  }

}
