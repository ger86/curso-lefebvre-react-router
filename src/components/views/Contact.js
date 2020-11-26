import React from 'react';
import {useHistory} from 'react-router-dom';
import {THANKS} from 'config/router/paths';

function Contact() {
  const history = useHistory();
  function handleClick() {
    history.push(THANKS);
  }
  return (
    <div>
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}

export default Contact;