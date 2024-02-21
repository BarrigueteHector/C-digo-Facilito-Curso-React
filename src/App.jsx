import { useState } from 'react';
import './App.css';

import MyFirstComponent from './MyFirstComponent';

function App() {
  const[value,setValue] = useState(0);
  
  setTimeout(() => {
    setValue(value + 1);
  }, 5000);

  // Si se devuelve null no se muestra nada
  // if(true){
  //   return null;
  // }

  // if anidados
  // if(value < 2){
  //   return <div> Cargando ...</div>;
  // }else if(value >= 10){
  //   setValue(0);
  // }

  return (
    <>
      
      {/* Otra forma de escribir el if else (renderizado condicional) */}
      {/* {value < 2 ? ( 
        <div> Cargando ...</div>
      ) : (
        <div>
          <h1>Vite + React</h1>
          <MyFirstComponent propOne={value} propTwo={2} propThree={{}}/>
        </div>
      )} */}

      {/* logical AND: se muestran ambas componentes*/}
      {value < 2 && <div> Cargando ...</div>}
      <h1>Vite + React</h1>
      <MyFirstComponent propOne={value} propTwo={2} propThree={{}}/>

    </>
  );
}

export default App;
