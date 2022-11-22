const number = process.argv[2]

function createIteratable(start = 0, end = number, step = 1) {
    let value = start
    return {
      [Symbol.iterator]: function () {
        return {
          next() {
            let result, nextTerm
            if (value < end) {
              for (let i = 1; i <= end; i++){
                result = { value, done: false }
                nextTerm = value + step
                value = step
                step = nextTerm
                return result
              }
            } return { value, done: true }
          },
        }
        },
    }
}

const iterable2 = createIteratable()

console.log([...iterable2])
