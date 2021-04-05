import React from 'react';
import './index.css';

const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3>{ planet.name }</h3>
      <p>Population - { planet.population }</p>
      <p>Terrain - { planet.terrain }</p>
      <p>Gravity - { planet.gravity }</p>
    </div>
  );
}
 
export default Planet;