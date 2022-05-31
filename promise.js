/*
 * @Author: luckydog
 * @Date: 2022-03-05 05:37:27
 * @LastEditTime: 2022-03-06 21:38:30
 * @Description:
 * @FilePath: /eg/promise.js
 */

const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"

class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = (val) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = val
      }
    }

    const reject = (res) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = res
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}

let promise = new MyPromise((resolve, reject) => {
  // reject("error")
  // throw new Error("fdfdfd")
  resolve(11313)
})

promise.then(
  (res) => {
    console.log("resolve", res)
  },
  (res) => {
    console.log("rejected", res)
  }
)
