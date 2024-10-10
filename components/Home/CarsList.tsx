import React, { useState } from 'react'
import CarCard from './CarCard'
import BookingModal from '../CarBooking/BookingModal';

function CarsList(props: any) {
  const [selectedCar, setSelectedCar] = useState<any>([]);
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {props.carsList.map((car: any, index: number) => (
        <div key={index} onClick={() => {
          const modal = document.getElementById('my_modal_4') as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
            setSelectedCar(car);
          }
        }}>
          <CarCard car={car} />
        </div>
      ))}

      <dialog id="my_modal_4" className="modal">
        <BookingModal car={selectedCar}/>
      </dialog>

    </div>
  )
}

export default CarsList