// Objectif : Écrire des tests unitaires pour une fonction qui résout le problème classique du FizzBuzz.

/*
 * Instructions :
 * La fonction doit retourner "Fizz" pour les multiples de 3, "Buzz" pour les multiples de 5, 
 * et "FizzBuzz" pour les multiples de 3 et 5.
*/
function fizzBuzz(number) {
    const isModulo3 = number % 3 == 0
    const isModulo5 = number % 5 == 0
    let result = ""
    if (isModulo3) {
        result += "Fizz";
    }
    if (isModulo5) {
        result += "Buzz";
    }

    return result
}

module.exports = { fizzBuzz }