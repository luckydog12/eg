/**
 * 题目1：编写一个 People 类，使其的实例具有监听事件、触发事件、解除绑定功能。
 * （实例可能监听多个不同的事件，也可以去除监听事件）
 */
class People9999 {
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
    this.events[type]
      ? this.events[type].push(...args)
      : (this.events[type] = args)
  }
  emit(type, ...params) {
    if (!this.events[type] || !this.events[type].length)
      throw new Error("没有此类型事件")
    this.events[type].forEach((item) => item.apply(this, [...params]))
  }
  // 解除绑定
  off(type) {
    if (!this.events[type] || !this.events[type].length)
      throw new Error("没有此类型事件")
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

/**
 * 题目2：完成 sleep 函数，可以达到下面的效果：
 */
const sleep = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

const anyFunc = async () => {
  console.log("123") // 输出 123
  console.time()
  await sleep(300) // 暂停 300 毫秒
  console.timeEnd()
  console.log("456") // 输出 456，但是距离上面输出的 123 时间上相隔了 300 毫秒
}
anyFunc()

/**
 * 题目3：完成 deepGet 函数，给它传入一个对象和字符串，字符串表示对象深层属性的获取路径，可以深层次获取对象内容：
 */
const deepGet = (obj, prop) => {
  let keys = prop.split(".").map((i) => i.trim())
  if (!keys) return undefined
  let res = keys.reduce((prev, curr) => {
    let objKey = curr.split("[") // 处理prop形如school[0]时情况
    // 首先判断key是否属于obj的keys
    if (prev && Object.keys(prev).includes(objKey[0])) {
      // 对象键值对中值为数组并且prop形如school[0]时
      if (objKey.length > 1 && Array.isArray(prev[objKey[0]])) {
        let idx = objKey[1].slice(0, -1).trim()
        return prev[objKey[0]][idx]
      } else if (objKey.length > 1 && !Array.isArray(prev[objKey[0]])) {
        // 对象键值对中值不为数组但是prop形如school[0]时 直接return undefin
        return undefined
      } else {
        // prop为school时 即objKey.length=1时候
        return prev[objKey[0]]
      }
    } else {
      return undefined
    }
  }, obj)
  return res
}

/** 以下为测试代码 */
deepGet(
  {
    school: {
      student: { name: "Tomy" },
    },
  },
  "school.student.name"
) // => 'Tomy'

deepGet(
  {
    school: {
      students: [{ name: "Tomy" }, { name: "Lucy" }],
    },
  },
  "school.students[1].name"
) // => 'Lucy'

// 对于不存在的属性，返回 undefined
deepGet({ user: { name: "Tomy" } }, "user.age") // => undefined
deepGet({ user: { name: "Tomy" } }, "school.user.age") // => undefined

/**
 * 题目4：完成 combo 函数。它接受任意多个单参函数（只接受一个参数的函数）作为参数，
 * 并且返回一个函数。它的作为用：使得类似 f(g(h(a))) 这样的函数调用可以简写为 combo(f, g, h)(a)。
 */

const combo = (...args) => {
  if (![...args].length) throw new Error("请填写正确参数")
  args = [...args].reverse()
  return (params) => args.reduce((prev, curr) => curr(prev), params)
}

/* 以下为测试代码 */
const addOne = (a) => a + 1
const multiTwo = (a) => a * 2
const divThree = (a) => a / 3
const toString = (a) => a + ""
const split = (a) => a.split("")

split(toString(addOne(multiTwo(divThree(666)))))
// => ["4", "4", "5"]

const testForCombo = combo(split, toString, addOne, multiTwo, divThree)
testForCombo(666)
// => ["4", "4", "5"]

/**
 * 题目5：有两个盘子分别放有 5 个和 7 个小球，两个朋友玩游戏：
 * 每个人轮流从两个盘子中拿小球，每人每次只能从其中一个盘子中拿，每次可以拿 1 个或者多个（不能一个都不拿），
 * 拿到最后一个小球的人算输。问开局先手和后手是否有必胜策略？如果有，请描述必胜策略。
 *
 *
 * 此种情况先手必胜，策略为第一轮把多的一盘小球的数量拿到与少的一盘一样多，
 * 例如此题目中A盘有5个小球、B盘有7个小球，先从B盘中拿走2个小球使两个盘子小球数量相同，
 * 以后的每一轮都尽量保持两个盘子小球数量相同即可，等待其中一个盘子的小球数量为1时，
 * 拿走另一个盘子里的剩余全部小球，即可必胜。
 */
