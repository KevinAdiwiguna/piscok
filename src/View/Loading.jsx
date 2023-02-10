import React from 'react'
import HashLoader from "react-spinners/HashLoader";



export const Loading = () => {
  return (
    <div className='bg-black h-screen w-full  justify-center items-center fixed z-[100]'>
      <div className='h-screen flex justify-center items-center'>
        <HashLoader color="#FFE868" size={70}/>
      </div>
    </div>

  )
}
