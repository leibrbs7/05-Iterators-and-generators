const number = process.argv[2]

function createIteratable(end = number) {
    let start = 0
    let value = start
    let n2 = 1
    return {
      [Symbol.iterator]: function () {
        return {
          next() {
            let result, nextTerm
            if (value < end) {
              for (let i = 1; i <= end; i++){ 
                result = { value, done: false }
                nextTerm = value + n2
                value = n2
                n2 = nextTerm
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
