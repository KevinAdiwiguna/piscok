import React from 'react'
import { Card } from './Card'

export const Productv2 = () => {
	return (
		<div className='bg-[#FFE868] h-[120vh] flex w-full justify-between flex-col  gap-5' id='products'>
			<div>
				<p className='font-bold text-4xl text-center mt-16 mb-10 sm:mt-24' data-aos="fade-up">Products List</p>
			</div>
			<div className='mx-5 min-w-[300px]' >
				<Card />
			</div>
			<div className='bg1'>
			</div>
		</div>
	)
}
