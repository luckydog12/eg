/*
  splice
  会改变原数组，返回删除项
  第一个参数： 定义新元素被添加的位置
  第二个参数： 定义应该删除多少个元素
  其余参数： 定义要添加的新元素
*/
let arr = [1, 2, 3, 4, 5]
let res = arr.splice(0, 3)
console.log(arr, res)

/*
  slice
  不会改变原数组，创建包含截取部分的新数组
*/
// let arr = [1, 2, 3, 4, 5]
// let res = arr.slice(0)
// res[1] = 99
// console.log(arr, '=-', res)