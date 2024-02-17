import {useState} from 'react';

const MyFirstComponent = (props) => {
  const [value, setValue] = useState(0);
  const [hola, setHola] = useState('hola');
  
  //Para ver la actualización de este componente (en consola)
  console.log('MyFirstComponent rendered');

  return (
    <div id="1" className="myclassname"> 
      {hola}, este es mi primer componente {value}
    </div>
  );
};

export default MyFirstComponent;