import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Spinner from '../../Shared/Loadding/Spinner';
import HomeCard from './HomeCard/HomeCard';

const HomeDisplay = () => {
    const { loading } = useContext(AuthContext)
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/homedisplay')
            .then(res => res.json())
            .then(data => setDisplay(data));
        if (loading) {
            return <Spinner></Spinner>
        }

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