// Étape 1
// Écrire une fonction sum1 qui prend en entrée un tableau d’entiers et qui retourne le produit de leur addition.
const piece = [1,2,5,10,20,50,100,200]

function sum1(array) {
    let sum=0;
    for (i=0; i<array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sum1(piece))


