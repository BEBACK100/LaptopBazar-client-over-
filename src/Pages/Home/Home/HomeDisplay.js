import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Spinner from '../../Shared/Loadding/Spinner';
import HomeCard from './HomeCard/HomeCard';

const HomeDisplay = () => {
    const { loading } = useContext(AuthContext)
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        fetch('https://laptop-bazar-second-hand-server-assignment12-beback100.vercel.app/homedisplay')
            .then(res => res.json())
            .then(data => setDisplay(data));


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