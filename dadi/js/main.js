// DICE

//Generare un numero randomico tra 1 e 6 e assegnarlo all'utente
const userNumber = Math.floor(Math.random() * 6 + 1);
console.log(userNumber);
//Generare un numero randomico tra 1 e 6 e assegnarlo al computer
const pcNumber = Math.floor(Math.random() * 6 + 1);
console.log(pcNumber);
// SE il numero assegnato all'utente è > del numero assegnato al computer stampare es. "hai vinto"
// ALTRIMENTI SE il numero assegnato all'utente è < del numero assegnato al computer stampare es. "hai perso"
// ALTRIMENTI stampare es. "pareggio"
if ( userNumber > pcNumber ) {
    console.log("hai vinto");
} else if ( pcNumber > userNumber ) {
    console.log("hai perso");
} else {
    console.log("pareggio");
}