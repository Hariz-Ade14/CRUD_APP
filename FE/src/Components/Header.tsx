import React from 'react'
import Cookies from "js-cookie"

const Header = () => {
  const name = Cookies.get("Name");
  return (
    <div className='fixed flex items-center justify-between top-0 right-0 w-[80vw] float-right px-8 py-3 mb-20 bg-white shadow'>
         <h2 className='h-full'>Appointment Booking System</h2>
         <h4>Hi,{name}</h4>
    </div>
  )
}

export default Header