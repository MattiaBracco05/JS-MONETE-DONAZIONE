//Commentare la riga qua sotto dopo aver verificato che ci sia l' alert e che quindi sia tutto collegato
//alert("Test di collegamento")

//azzero il totale
let tot = 0
let decine = 0
let unita = 0
console.log("Azzero il totale prima di partire")

//funzione aggiungo
const carica = () => {
    if (tot === 98) {
        alert("Hai raggiunto la cifra massima!")
    } else {
        tot = tot + 2;
        console.log("Aggiungo 2€, sono a:")
        console.log(tot)
    }
    decine = tot / 10;
    unita = tot - (decine * 10);
    document.getElementById("decine").innerHTML = decine;
    document.getElementById("unita").innerHTML = unita;
}

//funzione rimuovo
const rimuovi = () => {
    if (tot === 0) {
        alert("Impossibile rimuovere altri 2€ perchè attualmente sei a 0€!")
    } else {
        tot = tot + -2;
        console.log("Rimuovo 2€, sono a:")
        console.log(tot)
    }
    decine = tot / 10;
    unita = tot - (decine * 10);
    document.getElementById("decine").innerHTML = decine;
    document.getElementById("unita").innerHTML = unita;

}