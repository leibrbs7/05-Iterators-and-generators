function createGenerator(end) {
    let value = 0
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

const generatorFunction = createGenerator(10)
const generatorObject = generatorFunction()

console.log([...generatorObject])