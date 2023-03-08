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


function sum1bis(array) {
    let sum=0;
    let i=0
    while (i<array.length) {
        sum += array[i];
        i++;
    }
    return sum;
}
console.log(sum1bis(piece))

// Étape 2
// Ecrire la fonction sum2, qui retourne le même résultat que sum1 mais en utilisant une fonction récursive.

let sumEtape2=0;
let index=0

function sum2(array) {
    if (index == array.length) {
        console.log(sumEtape2);
        return sumEtape2;
    } else {
        console.log(sumEtape2);
        sumEtape2 += array[index++];
        return sum2(array);
    }
}
sum2(piece)


// Étape 3
// On appelle factoriel le produit des entiers inférieurs ou égaux à un nombre donné. Exemple : factoriel de 3 = 1x2x3 = 6
// Écrire une fonction factorial qui prend un entier en paramètre et calcule son factoriel récursivement.


let factorialNumber=1;
let n=1;

function factorial(num) {
    if (n==num+1) {
        console.log(factorialNumber);
        return factorialNumber
    } else {
        factorialNumber *= n++;
        console.log(factorialNumber);
        return factorial(num)
        
    }
    
}
factorial(7)