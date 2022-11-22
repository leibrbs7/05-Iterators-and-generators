function createIteratable(end) {
    let start = 0
    let value = start
    let n2 = 1
    return {
      [Symbol.iterator]: function () {
        return {
          next() {
            let result, nextTerm
            if (value < end) {
                result = { value, done: false }
                nextTerm = value + n2
                value = n2
                n2 = nextTerm
                return result
            } return { value, done: true }
          },
        }
        },
    }
}

const iterable2 = createIteratable(10)

console.log([...iterable2])
