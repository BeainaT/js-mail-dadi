//MAIL
let access = document.querySelector(".enjoy");
//Creare una lista di mail
const allowedList = ["user-name@outlook.com", "name2022@hotmail.it", "user.10@gmail.com"];
console.log(allowedList);
//Chiedere all'utente di inserire la sua mail
const userEmail = prompt("Inserisci la tua e-mail");
console.log(userEmail);
//SE la mail inserita dall'utente è presente nella lista creata l'utente può accedere - stampare es. "accesso consentito"
//ALTRIMENTI stampare es. "accesso negato"
if (allowedList.includes(userEmail)) {
    access.innerText = "Welcome";
} else {
    alert("email non registrata. Non è possibile procedere con la navigazione");
    access.innerText = `User log in error`;
}