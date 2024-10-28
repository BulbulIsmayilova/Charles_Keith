import React from 'react'
import { GoPlusCircle } from 'react-icons/go'

function ThirdCard({item}) {
  return (
    <div className='thirdcard-container w-full relative'>
        <div className='thirdcardimg h-full text-[55px]'>
            <img className='w-full h-full' src={item} alt="coolbacim" />
        </div>
        <div className='thirdcard-content text-[55px]'>
          <p className='text-[16px] font-medium mb-[23px]'>Shop Now</p>
          <div>
            <GoPlusCircle />
          </div>
        </div>
    </div>
  )
}

export default ThirdCard