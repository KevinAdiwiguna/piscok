import React, { useState } from 'react'
import logo from "../../Assets/Images/logo.png"
import { BurgerBtn } from './Molecule/BurgerBtn'

export const Sidebar = () => {
        const [open, setOpen] = useState(false)

        const eventClick = () => {
                setTimeout(() => {
                      setOpen(false)  
                }, 100);
        }

        return (
                <div className='md:hidden w-full fixed top-0 z-50 text-[#FFE868]'>
                        <div>
                                <div className='bg-[#FFE868] p-3 flex items-center justify-between'>
                                        <div className='max-w-[40px] '>
                                                <img src={logo} alt="" width={100} />
                                        </div>
                                        <div>
                                                <BurgerBtn setOpen={setOpen} open={open} />
                                        </div>
                                </div>
                                <div className={`${open ? "w-full" : " w-0"} bg-[#362923]  h-screen absolute z-50 duration-300`}>
                                        <div className='flex flex-col h-[70%] justify-center items-center '>
                                                <a href="#home" onClick={() => eventClick()}  className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} duration-300 my-10 text-xl font-semibold` }>Home</a>
                                                <a href="#products" onClick={() => eventClick()} className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} duration-300 my-10 text-xl font-semibold`}>Product</a>
                                                <a href="#team" onClick={() => eventClick()} className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} duration-300 my-10 text-xl font-semibold`}>Team</a>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
