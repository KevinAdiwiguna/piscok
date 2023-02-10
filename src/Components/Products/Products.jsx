import React from 'react'
import { Card } from './Molecule/Card'

export const Products = () => {
  return (
    <div className='bg1 flex justify-start items-center flex-col ' id='products'>
        <p className='pt-36 font-bold text-4xl ' >Products List</p>
        <Card />
    </div>
  )
}
