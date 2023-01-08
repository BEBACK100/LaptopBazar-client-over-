import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Spinner from '../../Shared/Loadding/Spinner';


const HomeDisplay = () => {
    const { loading } = useContext(AuthContext)
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        fetch('https://laptop-bazar-second-hand-server-assignment12.vercel.app/alldata')
            .then(res => res.json())
            .then(data => {
                if (loading) {
                    setDisplay(data)
                }
                return <Spinner></Spinner>
            });


    })

    return (
        <div>
            <h1>display laptop:{display.length} </h1>
            {
                display.map(data => <p
                    key={data.id}


                > <Link to={`/catagory/${data.id}`} >{data.name} </Link> </p>)
            }
        </div>
    );
};

export default HomeDisplay;