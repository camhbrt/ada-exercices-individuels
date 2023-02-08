
//Etape 1 :
function askName() {
    let prenom = prompt("Comment t'appelles-tu ?");
    let bonjour_prenom = "👋 Bonjour " + prenom + " !";
    document.body.innerHTML += '<h2>' + bonjour_prenom + '</h2>';
}

//Etape 2: 
function askBirthYear() {
    let annee = prompt("En quelle année es-tu né(e) ?");
    let quel_mois = prompt("...et à quel mois ?");
        if (quel_mois === "janvier" || quel_mois === "Janvier") {
            let age1 = 2023 - annee;
            document.body.innerHTML += '<h3> Vous avez ' + age1 + ' ans. C\'est super jeune !</h3>';  
        } else {
            let age2 = 2022 - annee;
            document.body.innerHTML += '<h4> Vous avez ' + age2 + ' ans. C\'est super jeune !</h4>';  
        }
     
}

//inclure l'étape bonus ici


//Etape 3 : (+ fonctions créées au niveau des étapes 1 et 2)
askName();
askBirthYear();



// ## Étape bonus: Soyons précis, voulez-vous ? 🧐
// Pour plus de précisions sur l’âge de notre utilisateur.ice, 
//demandez-lui également son mois de naissance et prenez-le en compte dans le calcul.



//Etape bonus :
