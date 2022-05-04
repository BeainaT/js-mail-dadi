//MAIL
let access = document.querySelector(".enjoy");
// //Creare una lista di mail
// const allowedList = ["user-name@outlook.com", "name2022@hotmail.it", "user.10@gmail.com"];
// console.log(allowedList);
// //Chiedere all'utente di inserire la sua mail
// const userEmail = prompt("Inserisci la tua e-mail");
// console.log(userEmail);
// //SE la mail inserita dall'utente è presente nella lista creata l'utente può accedere - stampare es. "accesso consentito"
// //ALTRIMENTI stampare es. "accesso negato"
// if (allowedList.includes(userEmail)) {
//     access.innerText = "Welcome";
// } else {
//     alert("email non registrata. Non è possibile procedere con la navigazione");
//     access.innerText = `User log in error`;
// }

const allowedList = ["user-name@outlook.com", "name2022@hotmail.it", "user.10@gmail.com"];
console.log(allowedList);
//Chiedere all'utente di inserire la sua mail
const userEmail = prompt("Inserisci la tua e-mail");
console.log(userEmail);
//Creare una variabile booleana di controllo 
let check = true;
//SE la mail inserita dall'utente è presente nella lista creata l'utente può accedere - stampare es. "accesso consentito"
//ALTRIMENTI stampare es. "accesso negato"
for( let i = 0; i < allowedList.length; i++ ) {
    if (allowedList[i] === userEmail) {
        check = false;
    } 
}
if ( check ) {
    alert("email non è registrata. Non è possibile procedere con la navigazione");
    access.innerText = "User log in error";
}
else {
    access.innerText = "Welcome";
}