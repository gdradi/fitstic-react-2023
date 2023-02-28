import _ from 'lodash';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App';
import "./app.scss";
import { Display } from './Display';
import { Header } from './Header';

// Importazione dei file di ripasso typescript
// il percorso di importazione è relativo a questo file
// import "./typescript/ripasso";
// import "./typescript/oop";
// import "./typescript/interfacce";
// import "./typescript/funzioni";

interface Post {
  readonly id: number;  // proprietà url
  author: string;    // questa proprietà è di tipo Author
  body: string;
  imageUrl?: string[];    // ? significa opzionale
};


const post1: Post = {
  id: 1,
  author: "Giacomo",
  body: "Contenuto del post"
};
const post2 = {
  id: 2,
  author: "Dradi",
  body: "Contenuto del post 2",
  imageUrl: ["http://www.sito.it/immagine1.jpg", "http://www.sito.it/immagine2.jpg"]
} as Post;
const arrayDiPost: Post[] = [post1, post2];


const nome = "Giacomo";

let array = [4, 6, 1, 3, 6];
let booleano = false;


const funzionePerIfElse = () => {
  if (array.length % 2 === 0) {
    return <div className="riquadro-nome">pari</div>;
  } else if (array.length < 10) {
    return <div>lunghezza minore di 10</div>;
  } else {
    return <div>maggiore o uguale di 10</div>;
  }
}

const funzionePerSwitch = () => {
  switch (array.length) {
    case 1: return <div>Lunghezza 1</div>;
    case 2: return <div>Lunghezza 2</div>;
    default:
      return <div>lunghezza {array.length}</div>
  }
}

const funzionePerCiclo = () => {
  // let result: JSX.Element[] = [];
  // for (let i = 0; i < array.length; i++) {
  //   result.push(<div>Elemento alla posizione {i}: {array[i]}</div>);
  // }
  // return result;

  return _.map(array, (elemento, i) => <div>
    <div>ciao!!</div>
    Elemento alla posizione {i}: {elemento}
  </div>);
}


const elementoPerNome = <div className="riquadro-nome">
  {nome}
</div>



const elemento = <div className="miaclasse">
  {elementoPerNome}
  {elementoPerNome}
  {array.length}
  <div>
    {/* {array.length % 2 === 0
      ? <div className="riquadro-nome">pari</div>
      : null} */}

    {array.length % 2 === 0 && <div>pari</div>}

    {array.length % 2 === 0
      ? <div className="riquadro-nome">pari</div>
      : array.length < 10
        ? <div>lunghezza minore di 10</div>
        : <div>maggiore o uguale di 10</div>}


    {funzionePerIfElse()}

    <div>Booleano: {"" + booleano}</div>

    {array}
    {["stringa1", "stringa2", "stringa3"]}
    {[false, true, false]}

    {/* {funzionePerCiclo()} */}


    {_.map(array, (elemento, i) => <div key={i}>
      <div>ciao!!</div>
      Elemento alla posizione {i}: {elemento}
    </div>)}

    {_.map(arrayDiPost, (post, index) => {
      return <div className="riquadro-nome" key={index}>
        <h1>Post id: {post.id}</h1>
        <p>{post.body}</p>
        <div>Scritto da: {post.author}</div>
      </div>;
    })}
  </div>


  <div>Hello world!</div>
  <h1>Titolo {nome}</h1>
  <p>Paragrafo con span interno <span className="span-1">ciao!</span></p>
</div>;


// function App() {
//   return <div>Ciao sono app!</div>
// }




const App: React.FunctionComponent = () => {
  const myTitle = "Mio titolo 1";

  // Definizione di uno stato "counter" di tipo number
  const [counter, setCounter] = useState<number>(0);
  const counterNegativo = -counter;

  console.log("App!");

  return <div>
    {/* <Header title={myTitle} /> */}
    <Header title={myTitle} className="red-text" />
    <div>Ciao sono app!</div>

    <Display counter={counter} />
    <Display counter={counterNegativo} />

    <button onClick={() => {
      setCounter(counter + 2);
      // setCounter(counter => {
      //   console.log("primo set counter: ", counter);
      //   return counter + 1
      // });
      // setCounter(counter + 1);
      // console.log("log in mezzo!");
      // setCounter(counter => {
      //   console.log("secondo set counter: ", counter);
      //   return counter + 1
      // });
      // console.log("log in fondo!");

    }}>Bottone</button>
  </div>
}



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);