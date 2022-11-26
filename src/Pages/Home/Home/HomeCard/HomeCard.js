import React, { useEffect, useState } from 'react';
import hp from '../../../../asset/card/hp logo.png';
import dell from '../../../../asset/card/Dell_Logo.svg.png';
import asus from '../../../../asset/card/Asus-Logo-1995-present.png';
import CardInfo from './CardInfo';
import imgman from '../../../buy.jpg'



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
        <div className='my-10'>
            <div>

                <marquee className="text-3xl text-success font-bold text-center" >You can Buy a Laptop in your Choice and budget limitation</marquee>

            </div>

            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={imgman} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-8 mt-10 pt-12'>
                        <h1 className="text-5xl font-bold">Laptop Bazar!</h1>
                        <h1 className='text-2xl text-center font-bold text-cyan-500 py-5'>Click the Card and <br /> see all Laptop Which <br /> one do you want to buy</h1>

                    </div>
                </div>

            </div>

            <button className="btn btn-outline btn-primary w-full my-9 text-4xl px-3 justify-center items-center">Got to the Card</button>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cardData.map(card => <CardInfo
                        key={card.id}

                        card={card}

                    ></CardInfo>
                    )
                }
            </div>
        </div>
    );
};

export default HomeCard;