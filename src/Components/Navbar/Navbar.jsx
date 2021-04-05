import React from 'react';
import './index.css';

const Navbar = ({ setPage }) => {
    return (
        <nav>
          <button className="glow-on-hover" type="button" onClick={() => setPage('planets')}>
           Planets
          </button>
            <button className="glow-on-hover" type="button" onClick={() => setPage('people')}>People</button>
            <button className="glow-on-hover" type="button" onClick={() => setPage('people')}>Species</button>
            <button className="glow-on-hover" type="button" onClick={() => setPage('people')}>Starships</button>
            <button className="glow-on-hover" type="button" onClick={() => setPage('people')}>Vehicles</button>
        </nav>
      );
}
 
export default Navbar;