import { Fragment, useState } from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import Navbar from '../../../Components/Navbar';
import Planets from '../../../Components/Planets';
import People from '../../../Components/People';

function Home() {
  const [page, setPage] = useState('planets');

  return (
    <Fragment>
      <div className="App">
        <h1>Star Wars</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          { page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </Fragment>
  );
}

export default Home;