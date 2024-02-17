//Primera forma de declarar un componente (función flecha o anónima)
const MyFirstComponent = () => {
  const hola = 'Hola';

  return <div> {hola}, este es mi primer componente </div>;
};

//Segunda forma de declarar un componente (función tradicional)
function MyFirstComponentTwo() {}

//Unicamente se exporta una sola cosa
export default MyFirstComponent;
