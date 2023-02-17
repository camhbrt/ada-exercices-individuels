// ETAPE 5 :
// Afficher le range (0-50) auquel notre utilisateur à le droit autour du champ. Quelque chose comme 0 < ? < 50.
// Si l’utilisateur a gagné nous effacerons tout pour afficher notre message de bravo !
// En revanche, tant que l’utilisateur n’a pas trouvé le bon chiffre, on affichera le nombre de tentatives en cours sur la partie.
// Ajouter un champ input qui permet à l’utilisateur de rentrer sa proposition de nombre directement dans un champ sur la page avec un bouton valider.


//demande au joueur1 un nombre entre 0 et 50
function chooseNumber() {
    let answer = parseInt(prompt("Choisis un nombre entre 0 et 50 à faire deviner à joueur 2"));
    if (0 < answer && answer <= 50){
        alert("Joueur 2 va essayer de deviner ton nombre");
        console.log(answer);
        return answer;
    }
    else {
        alert("Tu n'as pas écouté la consigne, toi !");
        console.log("wrong");
        return chooseNumber();
    }

}
let player1 = chooseNumber();
console.log(player1)


let player2 = document.getElementById("guessPlayer2");
console.log(player2)


//demande au joueur2 de trouver le nombre
function askNumber() {
    let guess = parseInt(prompt("Quel est le nombre de joueur 1 ?"));
    if (0 < guess && guess <= 50) {
        return guess;
    } 
    else {
        alert("Propose un nombre entre 0 et 50");
        return askNumber();
    }
}

// vérifie si le nombre est bon
function didIWin(number, answer) {
    if (number === answer) {
        console.log("bravo")
        return true;   
    }    
    else {
        console.log("retente")
        return false;     
    }  
}


// Arrête le jeu si deviné, continue si non
function gamePlay() {
    
    let player2 = askNumber();
    let trueOrFalse = didIWin(player2, player1);

    console.log(player2); /*affiche undefined */
    console.log(player1);
    console.log (trueOrFalse);



    if (trueOrFalse === true) {
        alert("Bravo, tu as trouvé !");  
    } 
    else if (player2 > player1) {
        alert("plus petit");
        return gamePlay();
        console.log(player2);  
    } 
    else {
        alert("plus grand");
        return gamePlay();
        console.log(player2);   
    }

    
}
gamePlay()
