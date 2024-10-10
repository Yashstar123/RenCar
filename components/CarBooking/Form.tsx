"use client"
import { getStoreLocations } from '@/services'
import React, { useEffect, useState } from 'react'

function Form({ handleClose }: { handleClose: () => void }) {

    const [storeLocation, setStoreLocation] = useState<any>([])
    const [formValue, setFormValue] = useState({
        location: '',
        pickUpDate: '',
        dropOffDate: '',
        pickUpTime: '',
        dropOffTime: '',
        contactNumber: '',
    })
    useEffect(() => { getStoreLocation_() }, [])

    const getStoreLocation_ = async () => {
        const resp: any = await getStoreLocations();
        setStoreLocation(resp?.storesLocations);
        console.log(storeLocation);
    }

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: any) => {
        event?.preventDefault();
        console.log(formValue)
    }

    return (
        <div>
            <div className='flex flex-col w-full mb-5'>
                <label className='text-gray-400'>Pickup Location</label>
                <select defaultValue="Pickup Location" className='select select-bordered w-full max-w-lg bg-gray-100' name="location"  onChange={handleChange}>
                    <option disabled>Pickup Location</option>
                    {storeLocation && storeLocation.map((loc: any, index: number) => (
                        <option key={index}>{loc?.address}</option>
                    ))}
                </select>
            </div>

            <div className='flex flex-col gap-5 mb-5'>
                <div className='flex flex-col w-full'>
                    <label className='text-gray-400'>Pick Up Date</label>
                    <input type="date" placeholder="Type here" name="pickUpDate" className='input input-bordered w-full max-w-lg bg-gray-100'  onChange={handleChange}/>
                </div>

                <div className='flex flex-col w-full'>
                    <label className='text-gray-400'>Drop Off Date</label>
                    <input type="date" placeholder="Type here"  name="dropOffDate" className='input input-bordered w-full max-w-lg bg-gray-100' onChange={handleChange}/>
                </div>
            </div>

            <div className='flex gap-5'>
                <div className='flex flex-col w-ful mb-5'>
                    <label className='text-gray-400'>Pick Up Time</label>
                    <input type="time" placeholder="Type here" name="pickUpTime" className='input input-bordered w-full max-w-lg bg-gray-100' onChange={handleChange} />
                </div>
                <div className='flex flex-col w-ful mb-5'>
                    <label className='text-gray-400'>Drop Off Time</label>
                    <input type="time" placeholder="Type here"  name="dropOffTime" className='input input-bordered w-full max-w-lg bg-gray-100' onChange={handleChange}/>
                </div>
            </div>

            <div className='flex flex-col gap-5 mb-5'>
                <div className='flex flex-col w-full'>
                    <label className='text-gray-400'>Contact Number</label>
                    <input type="text" placeholder="Type here"  name="contactNumber" className='input input-bordered w-full max-w-lg bg-gray-100' onChange={handleChange}/>
                </div>
            </div>
            
            <div className='modal-action flex gap-2'>
                <button className='btn bg-gray-400 text-black hover:bg-gray-700 hover:text-white' onClick={handleClose}>Close</button>
                <button className='btn bg-blue-500 text-white hover:bg-blue-800' onClick={handleSubmit}>Save</button>
            </div>

        </div>
    )
}

export default Form