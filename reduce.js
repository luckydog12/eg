/*
  arr.reduce(callback,[initialValue])
  callback （执行数组中每个值的函数，包含四个参数）

    1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    2、currentValue （数组中当前被处理的元素）
    3、index （当前元素在数组中的索引）
    4、array （调用 reduce 的数组）

  initialValue （作为第一次调用 callback 的第一个参数。）
*/

// let arr = [2, 4, 6]
// let sum = arr.reduce((prev, cur, index, array) => {
//   console.log('prev: ', prev)
//   console.log('cur: ', cur)
//   console.log('index: ', index)
//   console.log('array: ', array)
//   console.log('----------------')
//   return prev + cur
// }, 10)
// let sum = 0
// arr.forEach(item => {
//   sum += item
// })
// console.log(arr, sum)


// 求和 求积
// let arr = [1, 2, 3, 4]
// let sum = arr.reduce((prev, cur) => prev + cur)
// let mul = arr.reduce((prev, cur) => prev * cur)
// console.log(sum, mul)

// 计算数组中每个元素出现的次数
// let arr = ['a', 'b', 'c', 'a', 'c']
// let obj = {}
// // arr.forEach(item => {
// //   if (item in obj) {
// //     obj[item]++
// //   } else {
// //     obj[item] = 1
// //   }
// // })
// let res = arr.reduce((prev, cur) => {
//   if (cur in prev) {
//     prev[cur]++
//   } else {
//     prev[cur] = 1
//   }
//   return prev
// }, {})
// console.log(res)

// 数组去重
// let arr = [5, 1, 1, 2, 3, 4, 3, 5]
// let res = Array.from(new Set(arr))
// console.log(res)

// let resArr = []
// arr.forEach(item => {
//   if (!resArr.includes(item)) {
//     resArr.push(item)
//   }
// })
// console.log(resArr)

// let resArr = arr.reduce((prev, cur) => {
//   if (!prev.includes(cur)) {
//     prev.push(cur)
//   }
//   return prev
// }, [])
// console.log(resArr)

// 多维数组 => 一维数组 
let arr = [
  [0, 1],
  [2, 3],
  [4, 5, [2, 3]]
]

// let res = arr.flat(Infinity)
// console.log(res)

// const flat = (item) => {
//   let res = item.reduce((prev, cur) => {
//     if (cur instanceof Array) {
//       return prev.concat(flat(cur))
//     } else {
//       return prev.concat(cur)
//     }
//   }, [])
//   return res
// }
// console.log(flat(arr))

console.log(Array.isArray(arr))