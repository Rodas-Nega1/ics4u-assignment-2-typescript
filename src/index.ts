/**
 * This program calculates highest run in a string
 *
 * By:      Rodas Neg
 * Version: 1.0
 * Since:   2022-10-12
 */

import promptSync from 'prompt-sync'

/**
 * This function finds the run in the userInput
 *
 * @param {string} listArray is the userInput.
 * @returns {number} maxValue max charactor in string.
 */
function maxRun(listArray: string[]): number {
  const arraySize = listArray.length
  let maxValue = 0
  let count = 0
  // first loop compares the first value to the adjacent value
  for (let loopCounterOne = 0; loopCounterOne < arraySize; loopCounterOne++) {
    // if count in the first loop is greater than max value, set count as the new max value
    //   then reset the count back to zero
    if (count > maxValue) {
      maxValue = count
    }
    count = 0
    // second loop compares only values that are itself and after
    for (
      let loopCounterTwo = loopCounterOne;
      loopCounterTwo < arraySize;
      loopCounterTwo++
    ) {
      // checks if the two loop indexes are the same then increases the counter by 1
      if (listArray[loopCounterOne] === listArray[loopCounterTwo]) {
        count += 1
      } else {
        break
      }
    }
  }
  return maxValue
}

const prompt = promptSync()
const stringInput = prompt('Enter your string: ')

let listArray = []
listArray = stringInput.split('')

console.log(`The max run is ${maxRun(listArray)}`)

console.log('\nDone.')
