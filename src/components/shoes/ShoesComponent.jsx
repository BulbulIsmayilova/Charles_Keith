import React from 'react'
import boots from '../../assets/shoes/boots.jpg'

function ShoesComponent() {
  return (
    <div className='flex flex-col relative'>
        <img className='w-[90px] h-[120px] px-[15px]' src={boots} alt="boots" />
        <p className='boot text-center leading-6 text-[14px] font-light absolute bottom-0 left-[50%] -translate-x-[50%]'>Boots</p>
    </div>
  )
}

export default ShoesComponent