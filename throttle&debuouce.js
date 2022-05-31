function throttle1(fn, delay) {
  let value = true
  return function () {
    if (!value) {
      return false
    }
    value = false
    setTimeout(() => {
      fn(), (value = true)
    }, delay)
  }
}

function throttle2(fn, delay) {
  let lastTime = 0
  return function () {
    let nowTime = Date.now()
    if (nowTime - lastTime > delay) {
      fn.call(this)
      lastTime = nowTime
    }
  }
}

function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
  }
}
