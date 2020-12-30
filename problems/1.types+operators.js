/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
 console.log(val)
 console.log(typeof val)
 if(typeof val === "number") {
   return true
 }
 else {
   return false
 }
}
console.log(isNumber())

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  if(val) {
    return true
  }
  else{
    return false
  }

}
console.log(isTruthy())

module.exports = {
  isNumber,
  isTruthy
}
