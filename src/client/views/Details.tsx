import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { IChirp } from '../utils/types';

const Details: React.FC<DetailsProps> = () => {

    const { id } = useParams();
    const history = useHistory();

    const [chirp, setChirp] = useState<IChirp>(null);

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            setChirp(chirp);
        })();
    }, [id]);

    return (
        <main className="container">
            <section className="row my-2 justify-content-center">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <h4 className="card-title">@{chirp?.username}</h4>
                            <p className="card-text">{chirp?.message}</p>
                            <div className="d-flex justify-content-end align-items-center">
                                <button onClick={() => history.push('/')} className="btn btn-outline-primary">Go Back</button>
                                    <Link className= "btn btn-outline-info" to={`/admin/${chirp?.id}`}>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

interface DetailsProps { };

export default Details;  