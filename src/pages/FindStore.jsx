import React from 'react'
import BreadCrumbs from '../components/static/BreadCrumbs'

function FindStore() {
  return (
    <main>
        <div className='wrapper'>
            <div className='mt-[15px] ml-5'>
            <BreadCrumbs txt={'Store Locator'}/></div>
            <div className='mt-[15px] ml-[30px] mb-[80px] flex'>
            <div className='w-[35%]'>
                <h1 className='text-[22px] mb-[18px] mt-[25px] leading-5 font-semibold tracking-widest uppercase'>Store Locator</h1>
                <p className='mb-[19px] text-[.875rem] font-normal'>Please select location to find your nearest CHARLES & KEITH store:</p>
                <select className=' w-full border border-[#ccc] rounded-[5px] text-[.875rem] outline-none px-[10px] py-[12px] '>
                  <option value="1">Select Location</option>
                  <option value="2">Azerbaijan</option>
                  <option value="3">Singapore</option>
                  <option value="4">Turkey</option>
                  <option value="5">Japan</option>
                </select>
            </div>
            <div className='w-[65%] ml-[20px]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48634.01447815483!2d49.77860624304083!3d40.37281857185246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7be709175%3A0x88253a0e15ad0687!2sCHARLES%20%26%20KEITH!5e0!3m2!1sen!2saz!4v1728362990954!5m2!1sen!2saz" width="90%" height="520px" style={{border:0,}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
     
            <div>
                
            </div>  

        </div>
    </main>
  )
}

export default FindStore