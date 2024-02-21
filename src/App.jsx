import { useState } from 'react';
import './App.css';
import MyFirstComponent from './MyFirstComponent';

const arrayOfNumbers = [1,2,3,4,5,6,7,8];

const arrayOfPeople = [
  {"id":1, name: 'Juan', age: 25},
  {"id":2, name: 'Pedro', age: 26},
  {"id":3, name: 'Maria', age: 27},
  {"id":4, name: 'Jose', age: 28},
  {"id":5, name: 'Luis', age: 29},
];

function App() {
  const[value,setValue] = useState(0);
  
  //Se puede iterar fuera del return
  //key siempre tiene que estar 
  const numberItems = arrayOfNumbers.map((item) => <li key={`array-number-item-${item}`}> {item} </li>);

  const peopleItems = arrayOfPeople.map((person) => <li key={`array-people-item-${person.id}`}> {person.name} - {person.age} </li>);

  return (
    <>
      {value < 2 ? ( 
        <div> Cargando ...</div>
      ) : (
        <div>
          <h1>Vite + React</h1>
          <MyFirstComponent propOne={value} propTwo={2} propThree={{}}/>
          
          {/* Lista no ordenada */}
          <ul> {numberItems} </ul>
          <ul> {peopleItems} </ul>
        </div>
      )}
    </>
  );
}

export default App;
