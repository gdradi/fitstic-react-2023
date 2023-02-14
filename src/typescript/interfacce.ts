/**
 * Interfaccia per definire una struttura dati
 * 
 * mi serve per modellare com'è fatto un post.
 * NON è una istanza concreta di un post, è solo una definizione formale
 * di cosa mi aspetto che un post abbia
 */

interface Author {
    readonly name: string;
    readonly surname: string;
};
interface Post {
    readonly id: number;  // proprietà url
    author: Author;    // questa proprietà è di tipo Author
    body: string;
    imageUrl?: string[];    // ? significa opzionale
};


/**
 * Questa struttura dati è anch'essa un Post, ma con delle proprietà in più
 */
interface PostWithLikes extends Post {
    numLikes: number;
}


/** Qui posso passare indistintamente un Post o un PostWithLikes, perchè
 * PostWithLikes è anch'esso un Post (vedi sopra)
 */
interface StampaPostFunction {
    (post: Post): void;
}
// function stampaPost(post: Post) {
//     console.log("stampaPost() ", post);
// }
// Scrittura tramite arrow function
const stampaPostInConsole: StampaPostFunction = (post: Post) => {
    console.log("stampaPost() ", post);
}
// Scrittura tramite funzione anonima 
// const stampaPost: StampaPostFunction = function (post: Post) {
//     console.log("stampaPost() ", post);
// }
// Questa funzione implementa StampaPostFunction, quindi è dello stesso tipo
// di stampPost sopra, ma lo fa in modo diverso
const stampaPostInDom: StampaPostFunction = (post) => {
    document.body.append(JSON.stringify(post))
}

// Funzione polimorfica, posso usare una qualsiasi implementazione
// di StampaPostFunction
const funzioneDiStampa: StampaPostFunction = stampaPostInConsole;


const post1: Post = {
    id: 1,
    author: {
        name: "Mario",
        surname: "Rossi"
    },
    body: "Contenuto del post"
};
const post2 = {
    id: 2,
    author: {
        name: "Mario",
        surname: "Rossi"
    },
    body: "Contenuto del post 2",
    imageUrl: ["http://www.sito.it/immagine1.jpg", "http://www.sito.it/immagine2.jpg"]
} as Post;
const postWithLike1: PostWithLikes = {
    id: 3,
    author: {
        name: "Mario",
        surname: "Rossi"
    },
    body: "Contenuto del post 3",
    numLikes: 100
}


stampaPostInDom(postWithLike1);




/**
 * Definizione di una interfaccia funzionale
 * Descrive  !!COSA!! è per me una funzione somma
 * 
 * e cioè una funzione che riceve in input due numeri e produce in output un numero
 */
interface SumFunction {
    (n1: number, n2: number): number;
}

/**
 * Definisco una costante di tipo SumFunction, che contiene una implementazione della funzione somma
 * @param n1 
 * @param n2 
 * @returns 
 */
const sum: SumFunction = (n1, n2) => {
    return n1 + n2;
}

console.log(sum(1, 1));


interface DatoConFunzione {
    readonly numero: number;
    readonly stringa: string;
    readonly miaFunzione: StampaPostFunction;
}





/**
 * Esercizio
 * 
 * implementare una funzione che si chiama calcola
 * che prende in ingresso due numeri e una funzione
 * e restituisce 
 * 
 * console.log(calcola(2, 3, somma));  // -> 5
 * console.log(calcola(6, 6, moltiplicazione)) // -> 36
 */



/** Soluzione  */

// Interfaccia funzionale che rappresenta una generica operazione tra due numeri
interface Operation {
    (n1: number, n2: number): number;
};
// Implementazione della funzione somma, di tipo Operation
const somma: Operation = (n1, n2) => n1 + n2;
// Implementazione della funzione moltiplicazione, di tipo Operation
const moltiplicazione: Operation = (n1, n2) => n1 * n2;

// Definizione dell'interfaccia funzione della funzione calcola (opzionale)
interface CalcolaFunction {
    (n1: number, n2: number, operation: Operation): number;

    /**
     * ReturnType<Operation> serve per inferire il tipo di ritorno dell'interfaccia funzionale Operation
     */
    // (n1: number, n2: number, operation: Operation): ReturnType<Operation>; 
}
/**
 * Implementazione della funzione calcola - il terzo parametro è di tipo Operation
 * @param n1 
 * @param n2 
 * @param operation 
 * @returns 
 */
const calcola = (n1, n2, operation) => operation(n1, n2);

console.log(calcola(2, 3, somma));  // -> 5
console.log(calcola(6, 6, moltiplicazione)) // -> 36


export { };

