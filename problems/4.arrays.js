/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
  if (arr.length < 2) {
    return null 
  } 
  else {
    return (arr[0] + arr[arr.length-1])/2

  }

}
console.log(firstAndLastAverage([]))

//

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
arr = [...arr, ...arr]
return arr 

}
let newArray = [1,2,3,4]

console.log(duplicateArray(newArray))
//duplicateArray()

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
return arr.slice(3)
}
removeFirstThreeElements([])

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
