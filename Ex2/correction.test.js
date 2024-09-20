const { isValidPassword } = require("./index.js")

/*
 * Instructions :
 * Créer des tests pour des mots de passe valides et invalides.
 * Introduire des tests paramétrés pour valider plusieurs mots de passe dans une seule fonction.
*/

test.each([
    ["Brybry", false],
    ["BryanLevieux1", true],
])("Le mot de passe %o doit être %o", (password, expected) => {
    expect(isValidPassword(password)).toBe(expected)
})