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

    feedForwardTest() {
        let nn = new NeuralNetwork(2, 2, 1)
        let input = [1, 0]
        let output = nn.feedForward(input)

        console.log(output)
    }

    backPropagationTest() {
        let nn = new NeuralNetwork(2, 2, 1)
        let inputs = [1, 0]
        let targets = [1]

        nn.train(inputs, targets)
    }

    testData(test_data) {
        let nn = new NeuralNetwork(2, 2, 1)

        for(let i = 0; i < 50000; i++) {
            let data = random(test_data)
            nn.train(data.inputs, data.targets)
        }

        console.log(nn.feedForward([0, 0]))
        console.log(nn.feedForward([1, 0]))
        console.log(nn.feedForward([0, 1]))
        console.log(nn.feedForward([1, 1]))
    }
}