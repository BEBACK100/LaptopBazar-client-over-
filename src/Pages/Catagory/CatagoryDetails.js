import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import PickUpCard from '../PickUp/PickUpCard/PickUpCard';
import Spinner from '../Shared/Loadding/Spinner';
import DetailsCard from './DetailsCard';

const CatagoryDetails = () => {

    const [laptopinfo, setLaptopinfo] = useState([])


    const { data: allLaptop = [], refetch, isLoading } = useQuery({
        queryKey: ['allLaptop'],
        queryFn: async () => {
            const res = await fetch(`https://laptop-bazar-second-hand-server-assignment12.vercel.app/alldata`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h1>All Laptop:{allLaptop.length} </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                {
                    allLaptop.map(laptop => <DetailsCard
                        key={laptop.id}
                        laptop={laptop}
                        setLaptopinfo={setLaptopinfo}
                    ></DetailsCard>)
                }
            </div>
            {
                laptopinfo &&
                <PickUpCard
                    refetch={refetch}
                    laptopinfo={laptopinfo}
                    setLaptopinfo={setLaptopinfo}
                ></PickUpCard>
            }
        </div>
    );
};

export default CatagoryDetails;