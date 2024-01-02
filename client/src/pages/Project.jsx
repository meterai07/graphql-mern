import { Link, useParams } from "react-router-dom"
import Spinner from "../components/Spinner"
import { useQuery } from "@apollo/client"
import { GET_PROJECT } from "../queries/projectQueries"

export default function Project() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { id }
    });

    if (loading) return <Spinner />;

    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            { !loading && !error && data.project ? (
                <div className="mx-auto w-75 card p-5">
                    <Link to='/' className="btn btn-light btn-sm w-25 d-inline ms-auto">Back</Link>
                    <h1 className="">{data.project.name}</h1>
                    <hr />
                    <p className="lead">{data.project.description}</p>
                    <p className="small">Status: <strong>{data.project.status}</strong></p>
                </div>
            ) : (
                <p>No Project Found</p>
            )}
        </>
    )
}
