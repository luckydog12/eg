// // Add AM PM suffix to an hour
// const suffixAmPm = (h) => `${ h % 12 === 0 ? 12 : h % 12 }${ h < 12 ? 'am' : 'pm' }`
// console.log(suffixAmPm(15))

// // Calculate the number of difference days between two dates
// const diffDays = (a, b) => Math.abs(a - b) / (1000 * 60 * 60 * 24)
// console.log(diffDays(new Date('2014-12-19'), new Date('2020-01-01')))

// // Calculate the number of months between two dates
// const monthDiff = (startDate, endDate) =>
//   Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth())
// console.log(monthDiff(new Date('2021-01-01'), new Date('2021-01-15')))

// // Compare two dates
// const compare = (a, b) => a.getTime() > b.getTime()

// // Convert a date to YYYY-MM-DD format
// const formatYmd = (date) => date.toISOString().slice(0, 10)

// // Convert seconds to hh:mm:ss format
// const formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8)
// const formatSeconds = (s) => new Date(s * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]

// // Extract year, month, day, hour, minute, second and millisecond from a date
// const extract = (date) =>
//   date
//   .toISOString()
//   .split(/[^0-9]/)
//   .slice(0, -1);

// // Format a date for the given locale
// const format = (date, locale) => new Intl.DateTimeFormat(locale).format(date)
// console.log(format(new Date(), 'zh'))

// // Get the current quarter of a date
// const getQuarter = (d = new Date()) => Math.ceil((d.getMonth() + 1) / 3)
// console.log(getQuarter())

// // Get the current timestamp in seconds
// const ts = () => Math.floor(new Date().getTime() / 1000)
// console.log(ts())

// // Get the day of the year from a date
// const dayOfYear = (date) => (date - new Date(`${date.getFullYear()}-01-01`)) / (24 * 60 * 60 * 1000) + 1
// console.log(dayOfYear(new Date('2020-01-06')))

// // Get the first date in the month of a date
// const getFirstDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1) + new Date(8 * 60 * 60 * 1000)
// console.log(getFirstDate())

// // Get the last date in the month of a date
// const getLastDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth() + 1, 0).toLocaleDateString()
// console.log(getLastDate())

// // Get the month name of a date
// const getMonthName = (date) => [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   ' November',
//   'December',
// ][date.getMonth()]
// console.log(getMonthName(new Date()))

// // Get the number of days in given month
// const daysInMonth = (month, year) => new Date(year, month, 0).getDate()

// // Get the timezone string
// const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone
// console.log(getTimezone())

// // Get the tomorrow date
// const tomorrow = (d = new Date()) => new Date(d.setTime(d.getTime() + 24 * 60 * 60 * 1000)).toLocaleDateString()
// const tomorrow = new Date(new Date().valueOf() + 1000 * 60 * 60 * 24)
// const tomorrow = ((d) => new Date(d.setDate(d.getDate() + 1)))(new Date())
// console.log(tomorrow)

// // Get the total number of days in a year
// const numberOfDays = (year) => (new Date(year, 2, 0).getDate() === 29 ? 366 : 365)
// const numberOfDays = (year) => ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 366 : 365)
// console.log(numberOfDays(2021))

// // Get the weekday of a date
// const getWeekday = (date) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
// console.log(getWeekday(new Date()))

// // Initialize the current date but set time to midnight
// const midnightOfToday = () => new Date(new Date().setHours(0, 0, 0, 0))
// console.log(midnightOfToday())

// // Sort an array of dates
// let date = ['2021-02-15', '2021-03-15', '2021-02-17', '2021-02-10']
// const sortDates = (arr) => arr.sort((a, b) => {

//   return new Date(a).getTime() - new Date(b).getTime()
// })
// sortDates(date)
// console.log(date)