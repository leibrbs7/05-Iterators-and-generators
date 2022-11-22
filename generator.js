const number = process.argv[2]

function createGenerator(start = 0, end = number, step = 1) {
    let start = 0
    let value = start
    let n2 = 1

    return function* generatorFunction() {
        let result, nextTerm
        if (value < end){
            for (let i = 1; i <= end; i++){
                result = { value, done: false }
                nextTerm = value + n2
                value = n2
                n2 = nextTerm
                yield result
            }
        } return { value, done: true }
    }
}

const generatorFunction = createGenerator()
const generatorObject = generatorFunction()

console.log([...generatorObject])