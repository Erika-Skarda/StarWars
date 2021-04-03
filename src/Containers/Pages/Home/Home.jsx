import { useState } from 'react';
import Navbar from '../../../Components/Navbar';
import Planets from '../../../Components/Planets';
import People from '../../../Components/People';

function Home() {
  const [page, setPage] = useState('planets');

  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        { page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default Home;