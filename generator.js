function createGenerator(end) {
  let value = 0
  let n2 = 1

  return function* generatorFunction() {
    let result; let
      nextTerm
    if (value < end) {
      for (let i = 1; i <= end; i += 1) {
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

const generatorFunction1 = createGenerator(10)
const generatorObject1 = generatorFunction1()

for (let i = 0; i < 6; i += 1) {
  console.log(generatorObject1.next())
  console.log(generatorObject1.next())
}
