const { addition,
    soustraction,
    multiplication,
    division,
    calculate
} = require("./index.js")

/*
 * Instructions :
 * Créer des tests pour addition, soustraction, multiplication, division et calculate.
*/

test("Addition de deux nombre positifs", () => {
    expect(addition(5, 3)).toBe(8)
})
test("Addition de deux nombre negatifs", () => {
    expect(addition(-5, -3)).toBe(-8)
})


test("Soustraction de deux nombre positifs", () => {
    expect(soustraction(5, 3)).toBe(2)
})
test("Soustraction de deux nombre negatifs", () => {
    expect(soustraction(-5, -3)).toBe(-2)
})


test("Multiplication de deux nombre positifs", () => {
    expect(multiplication(5, 3)).toBe(15)
})
test("Multiplication de deux nombre negatifs", () => {
    expect(multiplication(-5, -3)).toBe(15)
})


test("Division de deux nombre positifs", () => {
    expect(division(10, 5)).toBe(2)
})
test("Division de deux nombre negatifs", () => {
    expect(division(-10, -5)).toBe(2)
})


test.each([
    [5, "+", 3, 8],
    [5, "-", 3, 2],
    [5, "*", 3, 15],
    [15, "/", 3, 5],
])("Le calcul %f %s %f = %f", (firstNumber, operator, secondNumber, expected) => {
    expect(calculate(firstNumber, secondNumber, operator)).toBe(expected)
})
