// let {
//   a,
//   b
// } = {
//   a: 1,

// }
// console.log(a, b)

// let {
//   a: c,
//   b: d
// } = {
//   a: 1,
//   b: 2
// }
// console.log(c, d)

// let {
//   a = 1, b
// } = {
//   a: 3,
//   b: 2
// }
// console.log(a, b)

// let { a, b } = { b: 1, a: 2 }
// console.log(a, b)

// const arr = [1, 2, 3]
//   [arr[2], arr[1]] = [arr[1], arr[2]]
// console.log(arr) // [1,3,2]

let [a, ...b] = [1, 2, 3, 4]
console.log(a, b)