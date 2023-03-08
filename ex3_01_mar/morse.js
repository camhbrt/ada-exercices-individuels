// Étape 1
// Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.
// Tester la fonction en lui donnant une chaine de caractères “Hello, world”, et assurez-vous qu’elle renvoie bien ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]

function getLatinCharacterList(string) { 
	return string.split("")
};
let latinArray = getLatinCharacterList("SOS");
console.log(latinArray);

//Etape 2
// À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance entre les caractères alphabets latin et l’alphabet morse.
// Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
// Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien .-.

const latinToMorse = { 
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
};

function translateLatinCharacter(letter){
	let maj = letter.toUpperCase();
    return latinToMorse[maj]
};
let codedLetter = translateLatinCharacter("s");
console.log(`La lettre "s" en morse est `+codedLetter);


// Étape 3
// Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.
// Attention: la table de correspondance ne contient que des caractères majuscules.


function encode(text){
	//text se transforme en tableau avec chaque lettre séparée => ['T', 'E', 'X', 'T']
	let latinArray = getLatinCharacterList(text);
	//console.log(latinArray);
	let morseArray=[] //déclare tableau vide à remplir

	//chaque lettre du tableau doit être traduite en morse
	for (i= 0; i<latinArray.length; i++) {
		if (latinArray[i] != " ") {
			morse = translateLatinCharacter(latinArray[i]);
		}
		else {
			morse = " "
		}
		morseArray.push(morse); //puis on push les lettres traduites dans un nouveau tableau
	}
	return morseArray
};
console.log(latinArray + " = " +encode("sos"));



// Étape 4
// Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).
// Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
}

function getMorseCharacterList(string) {
	return string.split(" ")
}

function translateMorseCharacter(letter) {
    return morseToLatin[letter]
};

function decode(text) {
	
	let morseArray = getMorseCharacterList(text); //transforme la string en tableau
	//console.log(morseArray);
	let latinArray=[] //déclare tableau vide à remplir

	//chaque lettre du tableau doit être traduite en morse
	for (i= 0; i<morseArray.length; i++) {
		if (morseArray[i] == "/") {
			latin = " "
		}
		else {
			latin = translateMorseCharacter(morseArray[i]);
		}
		latinArray.push(latin);
	}
	return latinArray
}
let reponse = decode("... --- ... / -- ..")
console.log(reponse)

// Étape 5
// Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.

function getInput(){
	let textInput = document.getElementById("input").value;
	console.log("you wrote "+ textInput)
	return textInput
}
//let encodedString = getInput()
//console.log(encodedString)

function translateLtoM(){
	let encodedString = getInput();
	let answer = encode(encodedString);
	document.getElementById("codeAnswer").innerHTML = answer 
}
function translateMtoL(){
	let encodedString = getInput();
	let answer = decode(encodedString);
	document.getElementById("codeAnswer").innerHTML = answer 
}




//Dans le code html :

//<input name="input" type="text" id="input"> truc à traduire

//<button type="button" name="LtoM" onclick="encode()">Latin to Morse</button> 

//<button type="button" name="MtoL" onclick="decode()">Morse to Latin</button>

// <em id="codeAnswer"></em> Affiche la traduction