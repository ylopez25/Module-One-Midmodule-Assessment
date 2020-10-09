const { isNumber, isTruthy, doubleStr } = require("../problems/1.types+operators.js")

describe("isNumber", () => {
  test("Handles numbers", () => {
    expect(isNumber(4)).toBe(true)
    expect(isNumber(43.34890)).toBe(true)
    expect(isNumber(0)).toBe(true)
  })
  test("Handles values that are not numbers", () => {
    expect(isNumber("Banana")).toBe(false)
    expect(isNumber([1,2,3])).toBe(false)
  })
  test("Handles values that might not look like numbers, but are numbers", () => {
    expect(isNumber("34")).toBe(true)
    expect(isNumber(4/0)).toBe(true)
  })
})

describe("isTruthy", () => {
  test("Handles truthy inputs", () => {
    expect(isTruthy(true)).toBe(true)
    expect(isTruthy('0')).toBe(true)
    expect(isTruthy('false')).toBe(true)
    expect(isTruthy([])).toBe(true)
  })
  test("Handles falsey inputs", () => {
    expect(isTruthy(false)).toBe(false)
    expect(isTruthy(0)).toBe(false)
    expect(isTruthy(null)).toBe(false)
    expect(isTruthy(undefined)).toBe(false)
    expect(isTruthy(NaN)).toBe(false)
  })
})

describe("doubleStr", () => {
  test("Doubles string inputs", () => {
    expect(doubleStr("10")).toBe(20)
    expect(doubleStr("0")).toBe(0)
    expect(doubleStr("1.5")).toBe(3)
  })
  test("Returns a number", () => {
    const doubledVal = doubleStr("10")
    expect(typeof doubledVal).toBe("number")
  })
  test("Handles NaN inputs", () => {
    expect(doubleStr("Hello")).toBe(NaN)
  })
})
