import React from 'react';
import items1 from "../../../Assets/items/items1.jpg"
import items2 from "../../../Assets/items/item2.jpg"
import items3 from "../../../Assets/items/item3.jpeg"
import items4 from "../../../Assets/items/items4.jpeg"




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
                        name: "Piscok original",
                        images: "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/2021/08/23/2519948243.jpg"
                },
                {
                        name: "Piscok Strawberry",
                        images: "https://kaspin.sgp1.digitaloceanspaces.com/DataGambar/568371/barang/051.png"
                },
                {
                        name: "Piscok Vanilla",
                        images: "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/9538d74d-02cc-4c74-aef8-ac9934e83fb3_Go-Biz_20210914_142854.jpeg"
                },
                {
                        name: "Piscok Maca",
                        images: "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE2020090614033234793/detail/menueditor_item_948fa818f5fb4b6e9bbf42a427b647e9_1599400847972446926.webp"
                },
        ]



        return (
                <AliceCarousel
                        mouseTracking
                        items={
                                productData.map((res, key) => {
                                        return (
                                                <div>
                                                        <div className='text-center' key={key}>
                                                                <p className='text-semibold text-2xl my-3'>{res.name}</p>
                                                                <img src={res.images} alt="" className='w-[300px] h-[300px] mx-auto rounded-3xl' />
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
