const { logGreeting, greeting, incrementGlobalCount, multiply } = require("../problems/2.functions.js")

describe("logGreeting", () => {
  test("Logs the greeting to the console", () => {
    console.log = jest.fn()
    logGreeting("Ben")
    expect(console.log.mock.calls[0][0]).toBe("Hello Ben!")
  })
  test("Does not return any value", () => {
    expect(logGreeting("Ben")).toBe(undefined)
  })
})

describe("greeting", () => {
  test("Returns a greeting message", () => {
    expect(greeting("Ben")).toBe("Hello Ben!")
  })
  test("Does not log the greeting to the console", () => {
    console.log = jest.fn()
    greeting("Ben")
    expect(console.log.mock.calls[0][0]).toBe(undefined)
  })
})

describe("incrementGlobalCount", () => {
  test("Increments a global variable globalCount", () => {
    var globalCount = 0
    incrementGlobalCount(10)
    expect(globalCount).toBe(10)
  })
  test("Does not return anything", () => {
    expect(incrementGlobalCount(10)).toBe(undefined)
  })
})

describe("multiply", () => {
  test("Multiplies three numbers", () => {
    expect(multiply(2,3,4)).toBe(24)
    expect(multiply(8,0,3)).toBe(0)
    expect(multiply(-1.3,-3.2,-4.5)).toBe(-18.72)
  })
  test("Ignores extra input", () => {
    expect(multiply(2,3,4,5,6,7)).toBe(24)
  })
})
