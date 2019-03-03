'use strict'

class Test {

    constructor() { }

    matrixTest() {
        let a = new Matrix(2, 3)
        let b = new Matrix(3, 2)
        a.randomize()
        b.randomize()
        a.print()
        Matrix.transpose(a).print()
        b.print()

        let c = Matrix.multiply(a, b)
        c.print()

        c.map((val) => {
            return val * 2
        }).print()
    }
}