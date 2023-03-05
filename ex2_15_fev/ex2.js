// ETAPE 5 :
// Afficher le range (0-50) auquel notre utilisateur à le droit autour du champ. Quelque chose comme 0 < ? < 50.
// Si l’utilisateur a gagné nous effacerons tout pour afficher notre message de bravo !
// En revanche, tant que l’utilisateur n’a pas trouvé le bon chiffre, on affichera le nombre de tentatives en cours sur la partie.
// Ajouter un champ input qui permet à l’utilisateur de rentrer sa proposition de nombre directement dans un champ sur la page avec un bouton valider.


//demande au joueur1 un nombre entre 0 et 50
let count = 0; 


function chooseNumber() {
    let answer = parseInt(prompt("Choisis un nombre entre 0 et 50 à faire deviner à joueur 2"));
    if (0 < answer && answer <= 50){
        alert("Joueur 2 va essayer de deviner ton nombre");
        return answer;
    }
    else {
        alert("Tu n'as pas écouté la consigne, toi !");
        console.log("wrong" + answer);
        return chooseNumber();
    }

}
let player1 = chooseNumber();
console.log("right answer is " + player1);


//récuper l'input du player2
function getValue(){
    let guessPlayer2 = document.getElementById("guessPlayer2").value;
    console.log("player2 guessed " + guessPlayer2);
return parseInt(guessPlayer2);
}


// vérifie si le nombre est bon
function didIWin(guess, answer) {
    if (guess === answer) {
        return true;   
    }    
    else {
        return false;     
    }  
}


//Dit si on a gagné ou pas
function gamePlay() {
    let player2 = getValue();
    let trueOrFalse = didIWin(player2, player1);

    console.log(player2);
    console.log(player1);
    console.log (trueOrFalse);

    if (trueOrFalse === true) {
        document.getElementById("bravo").innerHTML = "Bravooooooo !" 
    } 
    else {
        count++;
        document.getElementById("prout").innerHTML = "tu as fait " + count + " essais";
        
    }   
}
// gamePlay() --> la fonction est déjà appelée dans le fichier HTML
