// Add your functions here
const map = (arr, callback) => {
    const mapped = []
    for (const num of arr) {
        mapped.push(callback(num))
    }
    return mapped
}

const reduce = (arr, callback, start) => {
    let reduced = !!start ? start : arr[0]

    let i = !!start ? 0 : 1
    for (; i < arr.length; i++) {
        reduced = callback(arr[i], reduced)
    }
    return reduced
}