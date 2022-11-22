const number = process.argv[2]

function createGenerator(start = 0, end = number, step = 1) {
    let value = start
    return function* generatorFunction() {
        let result, nextTerm
        if (value < end){
            for (let i = 1; i <= end; i++){
                result = { value, done: false }
                nextTerm = value + step
                value = step
                step = nextTerm
                yield result
            }
        } return { value, done: true }
    }
}

const generatorFunction = createGenerator()
const generatorObject = generatorFunction()

console.log([...generatorObject])