'use client'
import React, { useState } from 'react'
import {Link} from "next";
function Page() {
    const [searchTerm,setSearchTerm] = useState("");
    const [cars,setCars] = useState([{name:'BMW M8',id:1,prix:8000,source:'/Images/bmwm8.jpg'},{name:'BMW M5',id:1,prix:16000,source:'/Images/bmwm5.jpg'},{name:'Nissan GTR R34',id:1,prix:12000,source:'/Images/nissan.jpg'}])
    const [prix,setPrix] = useState(10000);




    return (
    <div>
        <h1>
            La liste des mes projets :
        </h1>
        <div className='flex '>
            <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} className='border-4 border-black p-1 rouded-lg' />
            <input type="range" name="" id="" value={prix} min={0} max={20000} step={1000} onChange={(e)=>setPrix(e.target.value)}/>
            <p> {prix} </p>
        </div>
        <div className='flex flex-col gap-8 mt-10'>
            {cars.filter((car) => car.name.includes(searchTerm) && car.prix <= prix)
            .map((car) => (
                <div key={car.id}>
                    <h2> {car.name} </h2>
                    <img src={car.source} alt="Voiture" className='w-40'/>
                    <p>{car.prix}</p>
                    

                </div>
            ))
        }

        </div>
    </div>
  )
}

export default Page