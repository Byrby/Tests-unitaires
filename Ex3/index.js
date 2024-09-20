// Objectif : Créer une calculatrice qui peut effectuer des opérations simples
// (addition, soustraction, multiplication, division) avec des tests pour chaque fonction.

function addition(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function soustraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

function division(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

/**
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @param {string} operation peut être +, -, * ou / 
 */
function calculate(firstNumber, secondNumber, operation) {
    $resultat = 0;
    switch (operation) {
        case "+":
            return addition(firstNumber, secondNumber);

        case "-":
            return soustraction(firstNumber, secondNumber);

        case "*":
            return multiplication(firstNumber, secondNumber);

        case "/":
            return division(firstNumber, secondNumber);

    }
    return resultat;
}

module.exports = {
    addition,
    soustraction,
    multiplication,
    division,
    calculate,
}