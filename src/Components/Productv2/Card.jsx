import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Card = () => {


        let productData = [
                {
                        name: "Piscok original",
                        images: "https://id-test-11.slatic.net/p/f3a1c65c2e11f0373776f80823b2fe8b.jpg",
                        text:"Piscok adalah makanan ringan yang terbuat dari bahan-bahan alami dan berkualitas tinggi. Ini memberikan sensasi rasa yang unik dan memuaskan, membuat Anda tidak pernah bosan dan selalu ingin lagi. Produk ini juga dibuat dengan menggunakan proses produksi yang higienis, sehingga aman untuk dikonsumsi. Jangan ragu untuk memilih Piscok Original sebagai pilihan makanan ringan sehat dan lezat.",
                        price:"10.000.00",
                        url: "https://wa.me/+6285253711498"
                },
                {
                        name: "Piscok Strawberry",
                        images: "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/075904ca-dedb-4a4c-b6ed-564135339eb8_Go-Biz_20210911_134630.jpeg",
                        text:"Piscok Rasa Strawberry adalah pilihan yang sempurna untuk penggemar rasa buah strawberry. Dengan bahan-bahan alami yang berkualitas tinggi, rasa yang segar dan lezat akan membuat Anda tidak bisa berhenti memakannya. Produk ini juga diperkaya dengan aroma dan rasa buah strawberry yang autentik, membuat Anda merasa seperti sedang menikmati buah segar. Piscok Rasa Strawberry adalah pilihan yang tepat untuk siapa saja yang mencari makanan ringan yang sehat dan lezat. Jangan tunggu lagi, cobain sekarang!",
                        price:"12.000.00",
                        url: "https://wa.me/+6285253711498"
                },
                {
                        name: "Piscok Vanilla",
                        images: "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/9538d74d-02cc-4c74-aef8-ac9934e83fb3_Go-Biz_20210914_142854.jpeg",
                        text:"Piscok rasa Vanilla adalah cemilan yang menyegarkan dan lezat. Dibuat dengan bahan-bahan berkualitas tinggi dan diproses dengan teknologi modern, Piscok Vanilla memberikan sensasi rasa yang unik dan nikmat. Rasakan kelembutan dan kenyamanan saat memakan Piscok Vanilla, cemilan yang sempurna untuk menemani waktu santai kamu. Jangan lewatkan kesempatan untuk mencoba Piscok Vanilla, cemilan yang akan memanjakan lidahmu.",
                        price:"12.500.00",
                        url: "https://wa.me/+6285253711498"
                },
                {
                        name: "Piscok Maca",
                        images: "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/2081d912-7024-471a-83f2-52efea288dfd_Go-Biz_20220925_082746.jpeg",
                        text:"Piscok rasa Maca adalah cemilan yang kaya akan rasa dan nutrisi. Dibuat dengan bahan utama maca, tanaman herbal yang memiliki banyak manfaat bagi kesehatan, Piscok Maca menawarkan sensasi rasa yang luar biasa. Nikmati kelezatan dan keunikan rasa maca dalam setiap gigitan Piscok Maca, cemilan yang pas untuk memenuhi hasrat makan kamu saat ingin merasakan sesuatu yang berbeda. Jangan tunda untuk mencoba Piscok Maca, cemilan yang akan membuat hari kamu lebih berwarna.",
                        price:"14.000.00",
                        url: "https://wa.me/+6285253711498"
                },
                {
                        name: "Piscok Keju susu",
                        images: "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/2081d912-7024-471a-83f2-52efea288dfd_Go-Biz_20220925_082746.jpeg",
                        text:"Piscok rasa Maca adalah cemilan yang kaya akan rasa dan nutrisi. Dibuat dengan bahan utama maca, tanaman herbal yang memiliki banyak manfaat bagi kesehatan, Piscok Maca menawarkan sensasi rasa yang luar biasa. Nikmati kelezatan dan keunikan rasa maca dalam setiap gigitan Piscok Maca, cemilan yang pas untuk memenuhi hasrat makan kamu saat ingin merasakan sesuatu yang berbeda. Jangan tunda untuk mencoba Piscok Maca, cemilan yang akan membuat hari kamu lebih berwarna.",
                        price:"14.000.00",
                        url: "https://wa.me/+6285253711498"
                },
        ]

        return (
                <AliceCarousel
                        autoHeight
                        infinite
                        mouseTracking
                        
                        items={
                                productData.map((res, key) => {
                                        return (
                                                <div key={key} className=' md:flex gap-5 justify-center container mx-auto '  >
                                                        <div className='max-w-[300px] max-h-[300px]'>
                                                                <img src={res.images} alt="" className='max-w-[300px] max-h-[300px] mx-auto rounded-3xl'/>
                                                        </div>
                                                        <div>
                                                                <p className='text-xl font-bold my-3 sm:text-2xl'>{res.name}</p>
                                                                <p className='my-3'>{res.text}</p>
                                                                <p className='mt-5 underline pointer-events-auto'  onClick={() => window.location = res.url}>Harga 1 kotak Rp.{res.price}</p>
                                                        </div>
                                                </div>
                                        )
                                })

                        }
                />
        )
}
