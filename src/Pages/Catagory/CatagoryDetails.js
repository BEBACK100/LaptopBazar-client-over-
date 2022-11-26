import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const CatagoryDetails = () => {
    const allLaptop = useLoaderData([])
    return (
        <div>
            <h1>All Laptop:{allLaptop.length} </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                {
                    allLaptop.map(laptop => <DetailsCard
                        key={laptop.id}
                        laptop={laptop}
                    ></DetailsCard>)
                }
            </div>
        </div>
    );
};

export default CatagoryDetails;