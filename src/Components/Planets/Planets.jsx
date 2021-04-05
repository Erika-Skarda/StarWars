import React, { Fragment, useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import { getPlanets } from '../../Api';
import Loading  from '../Loading';
import Planet from '../Planet';
import '../ButtonPage/index.css';

const Planets = () => {
    const [ page, setPage ] = useState(1);
    const { 
        resolvedData, 
        latestData, 
        status 
    } = usePaginatedQuery(['planets', page ], getPlanets, {
        staleTime: 2000,
    });  

    return ( 
        <Fragment>
            <div>
                <h2>Planets</h2>
                
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
                            {resolvedData && resolvedData.results.map(planet => 
                                <Planet key={planet.name} planet={planet}/>
                            )}
                        </div>
                    </>
                )}
            </div>
        </Fragment>
     );
}
 
export default Planets;