import React from 'react';
import './index.css';

const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>{ person.name }</h3>
      <p>Gender - { person.gender }</p>
      <p>height - { person.height }</p>
      <p>Birth_year - { person.birth_year }</p>
    </div>
  );
}
 
export default Person;