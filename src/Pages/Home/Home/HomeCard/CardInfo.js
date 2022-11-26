import React from 'react';
import { Link } from 'react-router-dom';
import Catagory from '../../../Catagory/Catagory';

const CardInfo = ({ card, id }) => {
    const { name, description, icon, bgClass, img } = card;

    return (
        <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
            <Link className='hover:bg-green-400' to={`/catagory/${card.id}`}>

                <figure>
                    <img className='w-30' src={icon} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>

            </Link>
        </div>
    );
};

export default CardInfo;