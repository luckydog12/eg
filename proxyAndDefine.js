/*
 * @Author: luckydog
 * @Date: 2022-02-17 23:04:38
 * @LastEditTime: 2022-02-17 23:18:12
 * @Description:
 * @FilePath: /eg/proxyAndDefine.js
 */
// let test = "name11"
// let obj = new Proxy(
//   { test },
//   {
//     get(target, key) {
//       console.log("get被调用了")
//       return target[key]
//     },
//     set(target, key, val) {
//       console.log("set被调用了")
//       target[key] = val
//     },
//   }
// )

// obj.name = "fffff"
// obj.age = 12312
// console.log(obj.name)

// let test = "test"
// let obj = { test }
// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     Object.defineProperty(obj, key, {
//       get() {
//         console.log("get被调用了")
//         return test
//       },
//       set(val) {
//         console.log("set被调用了")
//         test = val
//       },
//     })
//   }
// }

// obj.test = 2222
// obj.age = 11211
// console.log(obj.test)
// console.log(obj.age)

let obj = {
  test: [1, 2],
}

let arr = new Proxy(obj, {
  get(target, key) {
    console.log("get函数被调用了", target, key)
    return Reflect.get(target, key)
  },
  set(target, key, val) {
    console.log("set函数被调用了")
    return Reflect.set(target, key, val)
  },
})
// console.log(arr.test[0]) // get函数被调用了
// arr.test[3] = 4 // set函数被调用了
// arr.push(5) // set函数被调用了
