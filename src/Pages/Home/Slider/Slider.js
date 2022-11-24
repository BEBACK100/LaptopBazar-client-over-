import React from 'react';
import './Slider.css'
import img1 from '../../../asset/Slideimg/img01hp.jpg'
import img2 from '../../../asset/Slideimg/img02hp.jpg'
import img3 from '../../../asset/Slideimg/img03hp.jpg'
import img4 from '../../../asset/Slideimg/img04.jpg'
import img5 from '../../../asset/Slideimg/img05.jpg'
import img6 from '../../../asset/Slideimg/img06.jpg'
import Sliding from './Sliding';


const bannerdata = [
    {
        image: img1,
        id: 1,
        previous: 6,
        next: 2
    },
    {
        image: img2,
        id: 2,
        previous: 1,
        next: 3
    },
    {
        image: img3,
        id: 3,
        previous: 2,
        next: 4
    },
    {
        image: img4,
        id: 4,
        previous: 3,
        next: 5
    },
    {
        image: img5,
        id: 5,
        previous: 4,
        next: 6
    },
    {
        image: img6,
        id: 6,
        previous: 5,
        next: 1
    }

]
const Slider = () => {
    return (
        <div>
            <div className="carousel w-2/3 mx-auto ">

                {
                    bannerdata.map(slide => <Sliding key={slide.id}

                        slide={slide}></Sliding>)
                }

            </div>
        </div>
    );
};

export default Slider;