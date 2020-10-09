const { removeOddNumbers, removeNumbersAtOddIndices, sevenBoom } = require("../problems/6.combinations.js")

describe("removeOddNumbers", () => {
  test("Removes odd numbers with a small set", () => {
    expect(removeOddNumbers([1,2,3,4,5,6,7,8,9])).toEqual([2,4,6,8])
  })
  test("Removes odd numbers with more values", () => {
    const input = [207, 808, 814,  41, 443, 689, 719, 611, 174, 98, 3, 632, 663, 531, 970, 941,   0, 554, 608, 827, 330,  90,  19, 857, 976, 806, 499, 464, 786, 590, 833, 721, 898, 441, 272,  37, 812, 705,  35, 987,  52,  63, 227, 388, 267, 574, 413, 262, 698,  48]
    const expected = [808, 814, 174,  98, 632, 970, 0, 554, 608, 330,  90, 976, 806, 464, 786, 590, 898, 272, 812,  52, 388, 574, 262, 698,48]
    expect(removeOddNumbers(input)).toEqual(expected)
  })
})

describe("removeNumbersAtOddIndices", () => {
  test("Removes numbers at odd indices from a small set", () => {
    expect(removeNumbersAtOddIndices([1,2,3,4,5,6,7,8,9])).toEqual([ 1, 3, 5, 7, 9 ])
  })
  test("Removes numbers at odd indices with more values", () => {
    const input = [207, 808, 814,  41, 443, 689, 719, 611, 174, 98, 3, 632, 663, 531, 970, 941,   0, 554, 608, 827, 330,  90,  19, 857, 976, 806, 499, 464, 786, 590, 833, 721, 898, 441, 272,  37, 812, 705,  35, 987,  52,  63, 227, 388, 267, 574, 413, 262, 698,  48]
    const expected = [207, 814, 443, 719, 174,   3, 663, 970,   0, 608, 330,  19, 976, 499, 786, 833, 898, 272, 812,  35,  52, 227, 267, 413, 698]
    expect(removeNumbersAtOddIndices(input)).toEqual(expected)
  })
})

describe("sevenBoom", () => {
  test("Returns the correct sequence", () => {
    expect(sevenBoom(20)).toEqual([1,2,3,4,5,6,"BOOM",8,9,10,11,12,13,"BOOM",15,16,"BOOM",18,19,20])
    expect(sevenBoom(59)).toEqual([
  1,      2,      3,      4,  5,      6,      'BOOM',
  8,      9,      10,     11, 12,     13,     'BOOM',
  15,     16,     'BOOM', 18, 19,     20,     'BOOM',
  22,     23,     24,     25, 26,     'BOOM', 'BOOM',
  29,     30,     31,     32, 33,     34,     'BOOM',
  36,     'BOOM', 38,     39, 40,     41,     'BOOM',
  43,     44,     45,     46, 'BOOM', 48,     'BOOM',
  50,     51,     52,     53, 54,     55,     'BOOM',
  'BOOM', 58,     59
])
  })
})
