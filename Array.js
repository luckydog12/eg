// // Cast a value as an array
// const castArray = (value) => Array.isArray(value) ? value : [value]
// console.log(castArray([1]))

// // Check if an array is empty
// const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0
// console.log(isEmpty([1]))

// // Clone an array 
// const clone = (arr) => arr.slice(0)
// const clone = (arr) => [...arr]
// const clone = (arr) => Array.from(arr)
// const clone = (arr) => arr.map(x => x)
// const clone = (arr) => JSON.parse(JSON.stringify(arr))
// const clone = (arr) => arr.concat([])

// // Compare two arrays regardless of order
// const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort())
// console.log(isEqual([1, 2, 3], [1, 3, 2]))

// // Compare two arrays
// const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)
// const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i])
// console.log(isEqual([1, 2, 3], [1, 2, 3]))

// // Convert an array of objects to a single object
// const toObject = (arr, key) => arr.reduce((prev, cur) => {
//   return Object.assign(prev, {
//     [cur[key]]: cur
//   })
// }, {})

// const toObject = (arr, key) => Object.fromEntries(arr.map(item => [item[key], item]))

// let res = toObject(
//   [{
//       id: '1',
//       name: 'Alpha',
//       gender: 'Male'
//     },
//     {
//       id: '2',
//       name: 'Bravo',
//       gender: 'Male'
//     },
//     {
//       id: '3',
//       name: 'Charlie',
//       gender: 'Female'
//     },
//   ],
//   'id'
// );
// console.log(res)

// // Convert an array of strings to numbers
// const toNumbers = (arr) => arr.map(Number)
// const toNumbers = (arr) => arr.map(i => +i)
// console.log(toNumbers(['1', '2', '3']))

// // Count by the properties of an array of objects
// const countBy = (arr, prop) => arr.reduce((prev, cur) => {
//   if (cur[prop] in prev) {
//     prev[cur[prop]]++
//   } else {
//     prev[cur[prop]] = 1
//   }
//   return prev
// }, {})
// console.log(countBy(
//   [{
//       branch: 'audi',
//       model: 'q8',
//       year: '2019'
//     },
//     {
//       branch: 'audi',
//       model: 'rs7',
//       year: '2020'
//     },
//     {
//       branch: 'ford',
//       model: 'mustang',
//       year: '2019'
//     },
//     {
//       branch: 'ford',
//       model: 'explorer',
//       year: '2020'
//     },
//     {
//       branch: 'bmw',
//       model: 'x7',
//       year: '2020'
//     },
//   ],
//   'branch'
// ))

// // Count the occurrences of a value in an array
// const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? ++a : a), 0)
// const countOccurrences = (arr, val) => arr.filter(item => item === val).length
// console.log(countOccurrences([2, 1, 3, 3, 2, 3], 2))

// // Count the occurrences of array elements
// const countOccurrences = (arr) => arr.reduce((prev, cur) => {
//   if (cur in prev) {
//     ++prev[cur]
//   } else {
//     prev[cur] = 1
//   }
//   return prev
// }, {})

// const countOccurrences = (arr) => arr.reduce((prev, cur) => (((cur in prev) ? ++prev[cur] : prev[cur] = 1), prev), {})
// const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
// console.log(countOccurrences([2, 1, 3, 3, 2, 3]))

// 11