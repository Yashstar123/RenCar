import React, { useState } from 'react'
import CarCard from '../Home/CarCard'
import Form from './Form'
function BookingModal({car}:any) {

  const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null; // If modal is closed, don't render anything

  return (
    <div className="modal-box w-11/12 max-w-5xl bg-white text-black">
    <div className='pb-2'>
        <h3 className='text-[30px] font-light text-gray-400'>Rent A Car Now!</h3>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div><CarCard car={car}/></div>
        <div><Form handleClose={handleClose}/></div>
    </div>
    
  </div>
  )
}

export default BookingModal