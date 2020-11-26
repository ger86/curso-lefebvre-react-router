import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import {PROJECT} from 'config/router/paths';
import useQueryParam from 'hooks/useQueryParam';

function AboutMe() {
  const name = useQueryParam('name');
  return (
    <div>
      Hola, {name}
      <ul>
        {[1, 2, 3].map(projectId => (
          <li key={projectId}>
            <Link to={generatePath(PROJECT, {id: projectId})}>Proyecto {projectId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutMe;
