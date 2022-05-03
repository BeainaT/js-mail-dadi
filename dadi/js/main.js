// DICE
const gameBox = document.querySelector(".container");
const gameBtn = document.createElement("button");
const result = document.querySelector(".result");
gameBox.append(gameBtn);
gameBtn.classList.add("launch");
gameBtn.innerText = "Lancia i dadi";
gameBtn.addEventListener("click", 
    function() {        
        //Generare un numero randomico tra 1 e 6 e assegnarlo all'utente
        const userNumber = Math.floor(Math.random() * 6 + 1);
        let userLaunch = document.querySelector(".col_user").innerHTML = `${userNumber}`;
        //Generare un numero randomico tra 1 e 6 e assegnarlo al computer
        const pcNumber = Math.floor(Math.random() * 6 + 1);
        let pcLaunch = document.querySelector(".col_pc").innerHTML = `${pcNumber}`;
        // SE il numero assegnato all'utente è > del numero assegnato al computer stampare es. "hai vinto"
        // ALTRIMENTI SE il numero assegnato all'utente è < del numero assegnato al computer stampare es. "hai perso"
        // ALTRIMENTI stampare es. "pareggio"
        if ( userNumber > pcNumber ) {
            result.innerText = "hai vinto";
        } else if ( pcNumber > userNumber ) {
            result.innerText = "hai perso";
        } else {
            result.innerText = "pareggio";
        }
    }
);