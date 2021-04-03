import React from 'react';
import './index.css';

const Navbar = ({ setPage }) => {
    return (
        <nav>
            <button className="glow-on-hover" type="button" onClick={() => setPage('planets')}>Planets</button>
            <button className="glow-on-hover" type="button" onClick={() => setPage('people')}>People</button>
        </nav>
      );
}
 
export default Navbar;