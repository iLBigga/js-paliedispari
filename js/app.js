//Chiedo all'utente di inserire una parola
let userWorld = prompt('Inseriwsci una parola');
while (userWorld  == '') {
    userWorld = prompt('Inseriwsci una parola');
}

// Divio le lettere 
const letterSplit = userWorld.split('')
// console.log(letterSplit)

// Creo funzione per vedere userWorld è palindroma
function palindrmo (elenco) {

    // Mi salvo la lunghezza dell'array selezionato
    let arrayLength = elenco.length;
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

console.log(palindrmo(letterSplit));


