console.log("Sono il file interfacce!")



/**
 * L'intefaccia definisce 
 *      
 *      !!!!!    COSA     !!!!!!
 * 
 * le istanze che hanno come tipo questa interfaccia
 * mi aspetto che sappiano fare
 * 
 * In questo caso, tutto ciò che è di tipo IPersona
 * deve avere un metodo toString che non riceve parametri
 * e restituisce una stringa
 */
interface IPersona {
    toString: () => string;
}




/**
 * Le classi definiscono 
 *      
 *      !!!!!    COME     !!!!!!
 * 
 * concretamente sono implementate le definizioni scritte nell'interfaccia
 * 
 * Classi diverse possono implementare la stessa interfaccia, facendo cose diverse.
 * 
 * In questo esempio, il metodo toString deve esistere in entrambi le classi,
 * perchè entrambe implementano la stessa interfaccia (IPersona), ma il corpo
 * del metodo è diverso.
 */
class Persona implements IPersona {
    private name: string;
    private surname: string;
    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
    public getName() { return this.name; }
    public toString() { return this.name + " " + this.surname; }
}

class PersonaAlContrario implements IPersona {
    private name: string;
    private surname: string;
    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
    public getName() { return this.name; }
    public toString() { return this.surname + " " + this.name; }
}


const persona1 = new Persona("Mario", "Rossi");
const persona2 = new Persona("Marco", "Rossi");
const persona3 = new PersonaAlContrario("Giuseppe", "Rossi");


/**
 * Polimorfismo
 * Questo metodo può ricevere una qualsiasi istanza di una classe che rispetti (implementi)
 * l'interfaccia IPersona
 * @param persona 
 */
function stampaPersona(persona: IPersona) {
    console.log(persona.toString());
}


stampaPersona(persona1);
stampaPersona(persona3);

// console.log(persona1.toString());


export { };