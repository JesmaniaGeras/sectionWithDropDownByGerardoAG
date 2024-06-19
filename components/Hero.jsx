"use client"
import React, { use, useEffect, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

const Hero = () => {
    const [movilFlag, setMovilFlag] = useState(false);
    const verificarDispositivoMovil = () => {
        if (document.documentElement.clientWidth <= 800) {
            setMovilFlag(true);
        } else {
            setMovilFlag(false);
        }
    };
    
    useEffect(() => {
        verificarDispositivoMovil();
        window.addEventListener('resize', verificarDispositivoMovil);
        return () => window.removeEventListener('resize', verificarDispositivoMovil);
    }, []);
  return (
    <section className='flex flex-col-reverse md:grid grid-cols-2 max-w-[1280px] m-auto md:px-5 px-0 md:mt-5 gap-8'>
        {/* Lado derecho */}
        <div className='w-full flex flex-col gap-9 md:justify-center'>
            <div className='md:w-full md:h-full flex flex-col md:items-start sm:items-center md:justify-between md:py-16 gap-8'>
                <div className=''>
                    <h1 className='text-5xl md:text-7xl font-bold text-center md:text-left'>Make remote work</h1>
                </div>
                <div>
                    <p className='text-medium-Gray md:text-left text-center md:px-0 sm:px-10'>
                        Get your team in sync, no matter your location.
                        Streamline processes, create team rituals and 
                        watch productivity soars
                    </p>
                </div>
                <div className='mx-auto md:mx-0'>
                    <button className='bg-almost-Black text-white font-semibold px-5 py-3 rounded-lg border-2 border-black   
                     hover:bg-almost-White hover:text-almost-Black transition-all duration-300 ease-in'>
                        Learn More</button>
                </div>
            </div>
            {/* Clientes Imgs */}
            <div className='md:mt-auto grid grid-cols-4 items-center'>
                <img src="../client-databiz.svg" alt="" className='block w-full px-5'/>
                <img src="../client-audiophile.svg" alt="" className='block w-full px-5'/>
                <img src="../client-meet.svg" alt="" className='block w-full px-5'/>
                <img src="../client-maker.svg" alt="" className='block w-full px-5'/>
            </div>
        </div>
        {/* Lado izquierdo */}
        <div className='w-full flex flex-col items-center justify-center'>
            <img src={!movilFlag ? "../image-hero-desktop.png" : "../image-hero-mobile.png"} alt="" className='w-full px-0 md:w-[70%]'/>
        </div>
    </section>
  )
}

export default Hero