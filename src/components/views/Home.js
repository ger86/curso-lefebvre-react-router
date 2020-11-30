import React, {useState} from 'react';
import Button from 'components/UI/Button';
import useMode from 'hooks/useMode';

function Home() {
  console.log('render!!!!!!!');
  const {mode} = useMode();
  const [size, setSize] = useState('lg');

  function changeSize() {
    if (size === 'lg') {
      setSize('sm');
    } else {
      setSize('lg');
    }
  }

  const message = mode === 'dark' ? 'Home en modo oscuro' : 'Home en modo light';
  return (
    <div>
      {message}
      <Button onClick={changeSize} mode={mode}>Cambia el tamaño</Button>
    </div>
  );
}

export default Home;