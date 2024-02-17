import { useState } from 'react';
import './App.css';

import MyFirstComponent from './MyFirstComponent';

function App() {
  const[value,setValue] = useState(0);
  
  setTimeout(() => {
    setValue(value + 1);
  }, 5000);

  //Se actualiza este componente y su descendencia

  //Para ver la actualización de este componente (en consola)
  console.log('App rendered');

  return (
    <>
      <h1>Vite + React</h1>

      {/* MFC recibe propOne, propTwo y propThree como propiedades */}
      <MyFirstComponent propOne={value} propTwo={2} propThree={{}}/>
    </>
  );
}

export default App;
