import React from 'react';
import { useQuery } from 'react-query';
import { getPlanets } from '../../Api';
import Planet from '../Planet';

const Planets = () => {
    const { data, status } = useQuery("planets", getPlanets)  

    return ( 
        <div>
            <h2>Planets</h2>
            {status === 'loading' && (
                <div>Loading data...</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <div>
                    {data && data.results.map(planet => 
                        <Planet key={planet.name} planet={planet}/>
                    )}
                </div>
            )}
        </div>
     );
}
 
export default Planets;