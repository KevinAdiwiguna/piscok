
import React from 'react'
import logo from "../../Assets/Images/logo.png"


export const Hero = () => {
        return (
                        <div className='container  mx-auto px-2' >
                                <div className='sm:grid sm:grid-cols-2 justify-center items-center gap-3'>
                                        <div className='sm:col-span-1 mx-auto w-64 ' data-aos="fade-right">
                                                <img src={logo} alt="" className='hover:scale-125 duration-200'/>
                                        </div>
                                        <div className=' text-center sm:text-left  sm:col-span-1 sm:max-w-[400px]' data-aos="fade-left">
                                                <p className='text-3xl my-5 font-bold'>PISANG <span className='block'>COKLAT</span></p>
                                                <p className=''>Pisang yang kami rawat seperti anak sendiri, dan coklat yang di buat secara homemade lalu menggabungkan keduanya
                                                        menjadi Pisang coklat dengan bahan fresh buatan sendiri.
                                                        Kami membuat pisang coklat ini dengan cinta.
                                                </p>
                                        </div>
                                </div>
                        </div>
        )
}
