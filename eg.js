/*
 * @Author: luckydog
 * @Date: 2022-02-16 19:22:25
 * @LastEditTime: 2022-03-05 17:00:42
 * @Description:
 * @FilePath: /eg/eg.js
 */

// function test(a, ...rest) {
//   console.log(a, typeof a)
//   console.log(rest, typeof rest)
// }

// test(1, 2, 3)

// let events: {[props: string]: ((args: any) => any)[]} = {
//   a: [() => 1,]
// }
// events.a[0] = () => 2
// type IVal = ((args: any) => any)[]
// let events: Record<string, ((args: any) => any)[]> = {a: [() => 1,]}

class People {
  constructor(name) {
    this.name = name
  }
  // 这里需要定义形如{type: [funtion1, funtion2]}类型，如果采用ts会更好
  // events: Record<string, ((args: any) => void)[]> = {}
  events = {}
  handleArgs(...callback) {
    // 如果同一个函数添加多次，则相当于只绑定一个
    let args = [...new Set([...callback])].slice(1)
    // 如果args中存在不是函数的部分，这里不做抛出异常处理，直接过滤
    args = args.filter((i) => typeof i === "function")
    return args
  }
  // 监听 type为类型
  on(type) {
    // 获取需要添加绑定的函数
    let args = this.handleArgs.apply(null, [...arguments])
    this.events[type] ? this.events[type].push(...args) : (this.events[type] = args)
  }
  emit(type, ...params) {
    if (!this.events[type] || !this.events[type].length) throw new Error("没有此类型事件")
    this.events[type].forEach((item) => item.apply(this, [...params]))
  }
  // 解除绑定
  off(type) {
    if (!this.events[type] || !this.events[type].length) throw new Error("没有此类型事件")
    // 获取需要解除绑定的函数
    let args = this.handleArgs.apply(null, [...arguments])
    args.forEach((item) => {
      let idx = this.events[type].indexOf(item)
      if (idx > -1) {
        this.events[type].splice(idx, 1)
      } else {
        throw new Error("没有与此类型对应的函数，请检查需要解绑的函数名")
      }
    })
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }
}

/* 以下为测试代码 */
const say1 = (greeting) => {
  console.log(`${greeting}, nice meeting you.`)
}

const say2 = (greeting) => {
  console.log(`${greeting}, nice meeting you, too.`)
}
const jerry = new People("Jerry")
jerry.sayHi()
// => 输出：'Hi, I am Jerry'

jerry.on("greeting", say1)
jerry.on("greeting", say2)

jerry.emit("greeting", "Hi")
// // => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'

jerry.off("greeting", say1)
jerry.emit("greeting", "Hi")
// => 只输出：'Hi, nice meeting you, too'
