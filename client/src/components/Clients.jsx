import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner';

export default function Clients(){
    const { data, loading, error } = useQuery(GET_CLIENTS);

    if(loading) return <Spinner />;

    if(error) return `Error! ${error.message}`;

    return(
        <>
            { !loading && !error && (
                <table className='table table-striped'>
                    <thead>
                        <tr className='table-primary'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.clients.map( client => (
                            <ClientRow key={ client.id } client={ client } />
                        )) }
                    </tbody>
                </table>
            ) }
        </>
    )
}