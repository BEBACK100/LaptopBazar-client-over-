import React, { useEffect, useState } from 'react';

const Catagory = (card) => {
    const [alllaptop, setAlllaptop] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allLaptop')
            .then(res => res.json())
            .then(data => setAlllaptop(data))
    })



    return (
        <div>

            <h1>This is catagory page:{alllaptop.length} </h1>

        </div>
    );
};

export default Catagory;