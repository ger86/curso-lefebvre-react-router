import React from 'react';
import {useParams} from 'react-router-dom';

function Project() {
  const params  = useParams();
  console.log(params);
  return (
    <div>
      Esto es un proyecto {params.id}
    </div>
  );
}

export default Project;