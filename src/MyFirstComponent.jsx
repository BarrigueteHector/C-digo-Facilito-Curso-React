//Permite actualizar un valor cada que sea necesario
import {useState} from 'react';

//Primera forma de declarar un componente (función flecha o anónima)
const MyFirstComponent = () => {
  const [value, setValue] = useState(0 /*Argumento*/ ); //value = valor/ setValue = set para actualizar / Argumento = valor inicial
  const hola = 'Hola';

  //Hasta este momento no es reactivo, para actualizarlo se puede usar un temporizador

  setTimeout(() => {
    setValue(value + 1);
  }, 3000); //3 segundos

  //Ahora es reactivo

  return <div> {hola}, este es mi primer componente {value}</div>;
};

//Segunda forma de declarar un componente (función tradicional)
function MyFirstComponentTwo() {}

//Unicamente se exporta una sola cosa
export default MyFirstComponent;