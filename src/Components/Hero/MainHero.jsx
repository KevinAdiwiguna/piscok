import React from 'react'
import "../../index.css"
import { Hero } from './Hero'

export const MainHero = () => {
        return (
                <div className='bg h-screen flex justify-items-center items-center' id='home'>
                        <Hero />
                </div>
        )
}
