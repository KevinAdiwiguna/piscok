import React from 'react';
import items1 from "../../../Assets/team/1.jpg"
import items2 from "../../../Assets/team/2.jpg"
import items3 from "../../../Assets/team/3.png"
import items4 from "../../../Assets/team/4.png"


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// const responsive = {
//         0: { items: 1 },
//         568: { items: 2 },
//         764: {items: 3},
//         1024: { items: 4 },
// };

const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

export const Card = () => {

        let productData = [
                {
                        name: "Ayu",
                        images: items1
                },
                {
                        name: "Harir",
                        images: items2
                },
                {
                        name: "Abduh",
                        images: items3
                },
                {
                        name: "Kevin",
                        images: items4
                },
        ]



        return (
                <AliceCarousel
                        mouseTracking
                        items={
                                productData.map((res, key) => {
                                        return (
                                                <div className='container mx-auto'>
                                                        <div className='text-center' key={key}>
                                                                <p className='text-semibold text-2xl my-3'>{res.name}</p>
                                                                <img src={res.images} alt="" className='max-w-[300px] mx-auto rounded-3xl' />
                                                        </div>
                                                </div>
                                        )
                                })
                        }
                        responsive={responsive}
                        controlsStrategy="alternate"
                />
        )
}
