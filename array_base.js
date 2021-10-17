// toString
// let arr = [1, 2, 3]
// let res = arr.toString()
// console.log(arr, res)

// join
// let arr = [1, 2, 3]
// let res = arr.join('-')
// console.log(arr, res)

// pop 返回被弹出的值
// let arr = [1, 2, 3]
// let res = arr.pop()
// console.log(arr, res)

// push 返回新数组的长度
// let arr = [1, 2, 3]
// let res = arr.push('-', '=')
// console.log(arr, res)

// shift 弹出首位元素 返回被弹出的首位元素的值
// let arr = [1, 2, 3]
// let res = arr.shift()
// console.log(arr, res)

// unshift 
// let arr = [1, 2, 3]
// let res = arr.unshift('-')
// console.log(arr, res)

// delete 会留下数组空洞
// let arr = [1, 2, 3]
// let res = delete arr[0]
// console.log(arr, res)

// sort reverse
// let arr = [5, 6, 1, 3, 2, 0];
// arr.sort()
// arr.reverse()
// console.log(arr)
// 随机排序
// let arr = [146, 13, 35]
// arr.sort(() => {
//   return 0.5 - Math.random()
// })
// console.log(arr)


// 二维数组初始化
// let map = new Array(10).fill(new Array(10).fill(0))
// map[0][0] = 3
// console.log(map)

// let arr = Array.from(new Array(3)).map(() => new Array(2).fill(0))
// let arr = [...(new Array(3))].map(() => new Array(2).fill(0))
// arr[0][0] = 3
// console.log(arr)

// let map = []
// for (let i = 0; i < 10; i++) {
//   let arr = []
//   for (let j = 0; j < 3; j++) {
//     arr[j] = 0
//   }
//   map.push(arr)
// }
// console.log(map)

// forEach
// let arr = [1, 2, 3]
// arr.forEach(item => {
//   console.log(item)
// })
// console.log(arr)

// filter()
// let numbers = [45, 4, 9, 16, 25]
// let res = numbers.filter(item => {
//   return item > 18
// })
// console.log(numbers, '-=', res)

// every 检查所有数组值是否通过测试 只有所有元素都通过测试 return true
// let numbers = [45, 4, 9, 16, 25]
// let res = numbers.every(item => {
//   // console.log(item)
//   return item > 18
// })
// console.log(numbers, '-=', res)

// some 检查某些数组值是否通过测试  只要有通过测试的 便停止函数 return true
// let numbers = [45, 4, 9, 16, 25]
// let res = numbers.some(item => {
//   // console.log(item)
//   return item > 18
// })
// console.log(numbers, '-=', res)

// find 返回通过测试函数的第一个数组元素的值
// let numbers = [45, 4, 9, 16, 25]
// let res = numbers.find(item => {
//   return item > 18
// })
// console.log(numbers, res)

// findIndex 返回通过测试函数的第一个数组元素的索引
// let numbers = [45, 4, 9, 16, 25]
// let res = numbers.findIndex(item => {
//   return item > 18
// })
// console.log(numbers, res)