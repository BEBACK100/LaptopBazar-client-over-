import React, { useEffect, useState } from 'react';
import hp from '../../../../asset/card/hp logo.png';
import dell from '../../../../asset/card/Dell_Logo.svg.png';
import asus from '../../../../asset/card/Asus-Logo-1995-present.png';
import CardInfo from './CardInfo';
import Catagory from '../../../Catagory/Catagory';


const HomeCard = () => {


    const cardData = [
        {
            "id": 1,
            "icon": hp,
            "name": "All hp model Laptop",
            "bgClass": "bg-gradient-to-r from-primary to-secondary",
            "description": "You will get a Laptop in your minimum budget or you can sell your old laptop"
        },
        {
            "id": 2,
            "icon": dell,
            "name": "All dell model Laptop",
            "bgClass": "bg-accent",
            "description": "You will get a Laptop in your minimum budget or you can sell your old laptop"
        },
        {
            "id": 3,
            "icon": asus,
            "name": "All Asus model Laptop",
            "bgClass": "bg-gradient-to-r from-primary to-secondary",
            "description": "You will get a Laptop in your minimum budget or you can sell your old laptop"
        }
    ]
    // const [display, setDisplay] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/homedisplay')
    //         .then(res => res.json())
    //         .then(data => setDisplay(data));
    // })

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <CardInfo
                    key={card.id}

                    card={card}

                ></CardInfo>
                )
            }


        </div>
    );
};

export default HomeCard;