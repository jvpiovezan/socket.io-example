const chalk = require('chalk')

function getTimestamp() {
  function toTwoNumbersFormat(number) {
    return number.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  }

  const DateObject = new Date()
  const hours = toTwoNumbersFormat(DateObject.getHours())
  const minutes = toTwoNumbersFormat(DateObject.getMinutes())
  const seconds = toTwoNumbersFormat(DateObject.getSeconds())
  
  const timestamp = `[${hours}:${minutes}:${seconds}]`
  return timestamp
}

function logInfo(text) {
  if (!text) throw new Error('You need to pass a text parameter!')
  const timestamp = getTimestamp()
  console.log(chalk.gray(timestamp), chalk.green('[Info]'), text)
}

module.exports = {
  logInfo
}