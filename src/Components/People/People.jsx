import React, { Fragment, useState }  from 'react';
import { usePaginatedQuery } from 'react-query';
import { getPeople } from '../../Api';
import Loading  from '../Loading';
import Person from '../Person';
import '../ButtonPage/index.css';

const People = () => {
    const [ page, setPage ] = useState(1);
    
    const { 
        resolvedData, 
        latestData, 
        status 
    } = usePaginatedQuery(['people', page ], getPeople, {
        staleTime: 2000,
    });

    return ( 
        <div>
            <h2>People</h2>
            {status === 'loading' && (
                <Loading />
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <>
                    <button 
                        onClick={() => setPage(old => Math.max(old - 1, 1))}
                        disabled={page===1}
                    >
                        Previous page
                    </button>
                    <span> {page} </span>
                    <button
                        onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))}
                        disabled={!latestData || !latestData.next}
                    >
                        Next page
                    </button>
                    <div>
                        {resolvedData && resolvedData.results.map(person => 
                            <Person key={person.name} person={person}/>
                        )}
                    </div>
                </>
            )}
        </div>
     );
}
 
export default People;