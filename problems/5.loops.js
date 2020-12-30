/** Returns every even number from 0 to a given number
* @param {number} num - The number to iterate up to
* @param {number[]} - An array of even numbers from 0 to {num}
*/
function evenNumbers(num) { 
  let newArray = [] 

  for (let i = 0; i <= num; i++) { 
    if (i % 2 === 0) {
      newArray.push(i);
    }
}
return newArray
}

/** Returns all multiples of a given number up to 1000
 * Example if num was 3 the output would be [0, 3, 6, 9, 12, ...etc ] until 1000
* @param {number} num - The number to find multiples of
* @returns {number[]} - An array of all multiples of {num} up to 1000
*/
function multiplesToOneThousand(num) {
// let newArray = [1]
// for (i = 0; newArray[newArray.length- 1] < 1000 ; i++) {
//   newArray[i] = i * num 
 
// }
// return newArray


let newArray = []
let i = 0
while (i <= 1000) {
  newArray.push(i)
  i += num
}
return newArray

//   let newArray = []
// for (i = 0; newArray[newArray.length- 1] <= 1000 ; i++) {
//   newArray[i] = i * num 
// }
// return newArray
//console.log(newArray[newArray.length - 1])
}
//console.log(multiplesToOneThousand(10))

/** Returns the first n powers of 2 (starting at 0)
* Sample input: 6
* Sample output: [1,2,4,8,16,32]
* This is because 2^0 === 1 , 2^1 === 2, 2^2 === 4, 2^3 === 8, etc...
* @param {number} count - How many powers of two to find
* @returns {number[]} - An array with the first {count} powers of two
*/
function powersOfTwo(count) {
  let arr = []
for (i = 0; i < count; i++){
  arr[i] = 1;
  for (let j = 0; j < i; j += 1) {
    arr[i] = arr[i] * 2
  }
}
return arr
}

// console.log(powersOfTwo(6))

module.exports = {
  evenNumbers,
  multiplesToOneThousand,
  powersOfTwo
}

