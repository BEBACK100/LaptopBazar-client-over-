import React from 'react';
import hp from '../../../../asset/card/hp logo.png';
import dell from '../../../../asset/card/Dell_Logo.svg.png';
import asus from '../../../../asset/card/Asus-Logo-1995-present.png';
import CardInfo from './CardInfo';


const HomeCard = () => {

    const cardData = [
        {
            id: 1,
            name: 'All hp model Laptop',
            description: 'You will get a Laptop in your minimum budget or you can sell your old laptop',
            icon: hp,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'All dell model Laptop',
            description: 'You will get a Laptop in your minimum budget or you can sell your old laptop',
            icon: dell,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'All Asus model Laptop',
            description: 'You will get a Laptop in your minimum budget or you can sell your old laptop',
            icon: asus,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <CardInfo
                    key={card.id}

                    card={card}
                ></CardInfo>)
            }
        </div>
    );
};

export default HomeCard;