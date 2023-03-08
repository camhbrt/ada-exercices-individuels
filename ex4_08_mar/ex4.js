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
       // console.log(sumEtape2);
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
       // console.log(factorialNumber);
        return factorial(num)
        
    }
    
}
factorial(7)


// Étape 4
// En mathématiques, la suite de Fibonacci est une suite de nombres entiers dont chaque terme successif représente la somme des deux termes précédents, et qui commence par 0 et 1. Ainsi, les dix premiers termes qui la composent sont 0, 1, 1 (0+1), 2 (1+1), 3 (1+2), 5 (2+3), 8 (3+5), 13 (5+8), 21 (8+13) et 34 (13+21).

// Écrire une fonction fibonacci qui prend un entier x en paramètre et résoud la suite de Fibonacci.


let f=2;
let fiboSuite=[0,1,1]

function fibonacci(array) {

    while (f<30) {
        fiboSuite[f] = fiboSuite[f-1]+fiboSuite[f-2];
        f++;
        fibonacci();
    }
    return fiboSuite
}
fibonacci(fiboSuite)
console.log(fiboSuite)