console.log("hello world!");

let myVariable1 = 100;
let myVar2 = "ciao";
let myVar3: boolean = true;
let myVar5 = true;

let myArray1: number[] = [1, 2, 3, 4, 5];
let myArray2: string[] = ["stringa1", "stringa2"];

let myVar4 = myArray2[1];

console.log(myArray1, myArray2, myVar4);

if (myVar3 === true) {
    console.log("myVar3 è vero");
} else {
    console.log("myVar3 è false");
}

if (myVar3 === true && myVar5 === true) {
    console.log("sono tutte due vere");
}

switch (myVariable1) {
    case 1:
        console.log("myVariable1 è 1");
        break;
    case 2:
        console.log("myVariable1 è 2");
        break;
    case 4:
        console.log("myVariable1 è 4");
        break;
    default:
        console.log("myVariable1 è", myVariable1);
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i = i + 1;
    // i = i+1;
    // ++i;
}

let stranaCondizione1 = true && true && true && true && "ciao";
console.log("stranaCondizione1", stranaCondizione1);
let stranaCondizione2 = true && false && true && true && "ciao";
console.log("stranaCondizione2", stranaCondizione2);

// vale false perchè c'è almeno un false nella lista di booleani messi in AND
console.log("strana3", stranaCondizione1 && stranaCondizione2);



// function sum(p1: number, p2: number): number {
//     return p1 + p2;
// }

// let sum = function (p1: number, p2: number) {
//     return p1 + p2;
// }

let sum = (p1: number, p2: number) => {
    return p1 + p2;
}

let res = sum(10, 20);
console.log(res);

const myVar7 = 6;
//  myVar7 = 1;


const utente1 = {
    name: "Giacomo",
    surname: "Dradi",
    mail: "gdradi@mydev.it"
};
console.log("Nome prima della modifica", utente1.name);

let utente2 = utente1;
console.log("Nome utente2", utente2.name)

// utente1 = utente2;

utente1.name = "Mirko";
console.log("Nome dopo la modifica", utente1.name);
console.log("Nome utente2", utente2.name)




// Variabili per riferimento (oggetti e array)

const utente3 = {
    name: "Giacomo",
    surname: "Dradi"
}

const modificaNome = (utente: any) => {
    utente.name = "Pluto";
    console.log("Log2 dentro funzione modifica nome", utente.name);
}

console.log("Log1 Utente3", utente3.name);
modificaNome(utente3);
console.log("Log3 Utente3", utente3.name);



// Variabile per valore (tipi primitivi)

const modificaNumero = (numero: number) => {
    numero = numero + 100;
    console.log("n dentro funzione", numero)
}

let n = 10;
console.log("Log1 n", n);
modificaNumero(n);
console.log("Log3 n", n);





export { };