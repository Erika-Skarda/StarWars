import React from 'react';
import { useQuery } from 'react-query';
import { getPeople } from '../../Api';
import Person from '../Person';

const People = () => {
    const { data, status } = useQuery("people", getPeople)  

    return ( 
        <div>
            <h2>People</h2>
            {status === 'loading' && (
                <div>Loading data...</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <div>
                    {data && data.results.map(person => 
                        <Person key={person.name} person={person}/>
                    )}
                </div>
            )}
        </div>
     );
}
 
export default People;