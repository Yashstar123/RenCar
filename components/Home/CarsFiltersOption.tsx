"use client"
import React, { useEffect, useState } from 'react'

function CarsFiltersOption({carsList,setBrand,orderCarList}:any){
    const Brandset = new Set()
    const [brandList,setBrandList] =useState<any>()

    useEffect(()=>{
        if(carsList){
            filterCarList();
        }
    },[carsList])

    const filterCarList=()=>{
        carsList.forEach((element:any) => {
            Brandset.add(element.carBrand)
        });
        setBrandList(Array.from(Brandset))
    }
    return (
        <div className="mt-10 flex items-center justify-between">
            <div>
                <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
                <h2>Explore our cars you might like.</h2>
            </div>
            <div className='flex gap-5'>
                <select defaultValue="Price" className="select select-bordered w-full max-w-xs" style={{ backgroundColor: 'white' }}
                onChange={(e)=>orderCarList(e.target.value)}>
                    <option disabled>Price</option>
                    <option value={-1}>Min to Max</option>
                    <option value={1}>Max to Min</option>
                </select>
                <select defaultValue="Manufacturer" className="select select-bordered w-full md:block max-w-xs hidden" style={{ backgroundColor: 'white' }}
                onChange={(e)=>setBrand(e.target.value)}>
                    
                    <option disabled>Manufacturer</option>
                    {brandList&&brandList.map((brand:string,index:number) =>(

                    <option key={index}>{brand}</option>
                    ))}
                    
                </select>
            </div>
        </div>
    )
}

export default CarsFiltersOption