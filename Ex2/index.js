// Objectif : Écrire une fonction qui valide si un mot de passe respecte certains critères 
// Les critères : Minimum 8 caractères, un chiffre , une majuscule minimum, une minuscule minimum

function isValidPassword(password) {
    if (password.length < 8) {
        return false;
    }

    // Test pour vérifier la présence d'un chiffre
    if (/\d/.test(password) == false) {
        return false
    }

    // Test pour vérifier la présense d'une majuscule
    if (/[A-Z]/.test(password) == false) {
        return false
    }

    // Test pour vérifier la présense d'une minuscule
    if (/[a-z]/.test(password) == false) {
        return false;
    }

    return true;
}

module.exports = { isValidPassword }