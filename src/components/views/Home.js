import React, {useState} from 'react';
import Button from 'components/UI/Button/Button';

function Home() {
  const [size, setSize] = useState('lg');

  function changeSize() {
    if (size === 'lg') {
      setSize('sm');
    } else {
      setSize('lg');
    }
  }
  return (
    <div>
      Hola soy la home
      <button onClick={changeSize}>Cambia el tamaño</button>
      <Button onClick={() => {}} text="Púlsame" size={size} />
    </div>
  );
}

export default Home;