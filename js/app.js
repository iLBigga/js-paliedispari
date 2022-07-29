//Chiedo all'utente di inserire una parola
let userWorld 
do {
    userWorld = prompt('Inseriwsci una parola').toLowerCase();
}while (userWorld  == '')


// Creo funzione per vedere userWorld è palindroma
function palindrmo (elenco) {

    // Divio le lettere 
    const letterSplit = elenco.split('');
    // Mi salvo la lunghezza dell'array selezionato
    let arrayLength = letterSplit.length;
    // Creo variabile per salvarmi la posizione
    let arrayPosition;
    // Creo nuovo array 
    let newArray = [];

    // Creo ciclo for per inserire gli elementi dell'array selezionato all'intenro di newArray ma in reverse
    for (let i = arrayLength - 1; i >= 0 ; i--) {
        arrayPosition = elenco[i];
        newArray.push(arrayPosition);
    }

    // console.log(newArray)

    // Controllo se gli indici coicidono
    // Salvo posizione array 1
    let arrayPosition1;
    // Salvo poszione artray 2
    let arrayPosition2;
    // Creo variabile x = 0 
    let x = 0;
    // Creo variabile result = 'Palindormo'
    let result = 'Palindromo';

    // Creo ciclo while per controllare i vari indici
    while (x < arrayLength) {

        // console.log(arrayLength)
        // Utilizzo x per il selezionamento dell'indice
        arrayPosition1 = elenco[x];
        arrayPosition2 = newArray[x];

        // Se gli indici sono diversi
        if (arrayPosition1 != arrayPosition2) {
            // Modifico result in non palindromo
            result = 'Non Palindromo';
        } 

        // console.log(arrayPosition1, arrayPosition2)
        // Incremenmto x
        x++

    }
    // Do come risultato della fuzione 'Palindromo'o 'Non Palindromo'
    return result;
}

console.log(palindrmo(userWorld))

// Utilizzo queryseceltion per selezionare il tasto di invio
const submitElement = document.querySelector('input[type="submit"]');

// Creo funzione per creare numero random
function randomNum(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// Creo variabile per verificare se il numero è pari
const isEven = (num) => num % 2 === 0 ;
// Creo variabile per verificare se il numero è dispari
const isOdd = (num) => num % 2 === 1 ;

// Creo variabile per selezionare il numero inserito e se l'utente sceglie pari o dispari
let userNumber, userChoise;

// utilizzo eventlistener per ricever ei dati inseriti dall'utente
submitElement.addEventListener('click', function () {
    //Ricevo dati del numero inserio
    userNumber = document.querySelector('input[type="text"');
    userNumber = parseInt(userNumber.value);
    // Ricevo dati della scelta pari o dispari
    userChoise = document.querySelector('select');
    userChoise = userChoise.value; 
    console.log('Hai selezionato', userChoise)

    // Creo costante con fuzione RandomNum
    const botNumber = randomNum(1,5);
    // Calcolo somma di user e di bot number
    const somma = userNumber + botNumber;
    //SE l'utente ha selezionato pari ed il numero e pari O se l'utente ha selezionato dispari ed il risultato è dispari
    if ((userChoise === 'pari' && isEven(somma)) || (userChoise === 'dispari' && isOdd(somma))) {
        // Stampo Hai vito
        console.log('Hai vinto', userNumber, '+', botNumber, '=', somma);
    // ALTRIMENTI
    } else {
        // Stampo hai perso
        console.log('Hai perso',userNumber, '+', botNumber, '=', somma);
    } 
})
