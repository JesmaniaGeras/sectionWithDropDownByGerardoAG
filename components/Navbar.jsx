"use client"
import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
    const [dropDownFeatures, setDropDownFeatures] = useState(false);
    const [dropDownCompany, setDropDownCompany] = useState(false);

    // Controladores menú móvil
    const [menuMovil, setControllerMenuMovil] = useState(false);
    const [featuresMovil, setDropDownFeaturesMovil ] = useState(false);
    const [companyMovil, setDropDownCompanyMovil ] = useState(false);


    const handleMouseOver = (setDropdown) => {
        setDropdown(true);
    };

    const handleMouseOut = (setDropdown) => {
        setDropdown(false);
    };

    const activarMenuMovil = () =>{
        setControllerMenuMovil(!menuMovil);
    }

    const dropDownMovil = (valorActual, funcionAuxiliar) =>{
        funcionAuxiliar(!valorActual);
    }

  return (
    <nav className='w-full max-w-[1440px] p-4 flex justify-between mx-auto'>
            <div className='md:flex gap-10 content-start'>
                {/* Logo */}
                <div>
                    <img src="../logo.svg" alt="" />
                </div>

                {/* Menú Pc y Tablets */}
                <div className='hidden md:flex content-start gap-10'>
                    {/* Features Section */}
                    <div onMouseOver={() => handleMouseOver(setDropDownFeatures)} 
                            onMouseOut={() => handleMouseOut(setDropDownFeatures)}  >
                        <a href="" className='hover:font-bold transition-all duration-300 ease-in '>
                            <p> 
                                Features <img src={dropDownFeatures ? '../icon-arrow-down.svg' : '../icon-arrow-up.svg' } alt="" className='inline-block ml-2' />
                            </p>
                        </a>

                        <div className='pt-3'>
                            <div
                                className = 
                                    {dropDownFeatures ? 'flex flex-col bg-white p-5 absolute items-start shadow-xl rounded-md gap-2 transition-all duration-300 ease-in' : 
                                    'hidden transition-all duration-300 ease-in'}
                            >
                                <div className='flex '>    
                                    <a href="">
                                        <p> <img src="../icon-todo.svg" alt="" className='inline-block mr-2' /> To do List</p>
                                    </a>
                                </div>
                                <div className='flex '>
                                    <a href="">
                                        <p> <img src="../icon-calendar.svg" alt="" className='inline-block mr-2' /> Calendar </p>
                                    </a>
                                </div>
                                <div className='flex '>
                                    <a href="">
                                        <p> <img src="../icon-reminders.svg" alt="" className='inline-block mr-2' /> Reminders </p>
                                    </a>
                                </div>
                                <div className='flex '>
                                    <a href="">
                                        <p> <img src="../icon-planning.svg" alt="" className='inline-block mr-2' /> Planning </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Company DropDown */}
                    <div  onMouseOver={() => handleMouseOver(setDropDownCompany)} 
                            onMouseOut={() => handleMouseOut(setDropDownCompany)} >
                    <a href="" className='hover:font-bold transition-all duration-300 ease-in '>Company  <img src={dropDownCompany ? '../icon-arrow-down.svg' : '../icon-arrow-up.svg' } alt="" className='inline-block ml-2' /></a>
                    <div className='pt-3'>
                        <div 
                                className =  {dropDownCompany ? 'flex flex-col bg-white p-5 absolute items-start shadow-xl rounded-md gap-2 transition-all duration-300 ease-in' : 
                                    'hidden transition-all duration-300 ease-in'}
                        >
                                <div className='flex '>
                                    <a href="">History</a>
                                </div>
                                <div className='flex '>
                                    <a href="">Our Team</a>
                                </div>
                                <div className='flex '>
                                    <a href="">Blog</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="" className='hover:font-bold transition-all duration-300 ease-in '>Careers</a>
                    <a href="" className='hover:font-bold transition-all duration-300 ease-in '>About</a>
                </div>


                {/* Menú para móviles */}
                <div>
                    {/* fondo oscuro*/}
                    <div className={menuMovil ? 'h-full w-full bg-gray-700 opacity-55 fixed top-0 left-0 right-0 md:hidden transition-all duration-300 ease-in' : 'opacity-0 transition-all duration-300 ease-in'}></div>
                    {/* menú */}
                    <OutsideClickHandler onOutsideClick={()=>{setControllerMenuMovil(false);}}>
                    <div className={menuMovil ? 'h-full w-[60%] fixed bg-white top-0 right-0 z-10 flex flex-col gap-6 py-24 px-8 text-xl md:hidden transition-all duration-300 ease-in' : 'h-full w-[60%] fixed bg-white top-0 right-[-100%] z-10 flex flex-col gap-6 py-24 px-8 text-xl md:hidden transition-all duration-300 ease-in'}>
                        <div>
                            <a href="#" className='hover:font-bold transition-all duration-300 ease-in' onClick={() => dropDownMovil(featuresMovil, setDropDownFeaturesMovil)}>
                                Features  <img src={featuresMovil ? '../icon-arrow-up.svg' : '../icon-arrow-down.svg'  } alt="" className='inline-block ml-2' />
                            </a>
                            <div
                                className =  {featuresMovil ? 'flex flex-col pl-7 items-start gap-5 transition-all duration-300 ease-in mt-6' : 'hidden'}
                            >
                                    <div className='flex '>    
                                        <a href="#">
                                            <p> <img src="../icon-todo.svg" alt="" className='inline-block mr-2' /> To do List</p>
                                        </a>
                                    </div>
                                    <div className='flex '>
                                        <a href="#">
                                            <p> <img src="../icon-calendar.svg" alt="" className='inline-block mr-2' /> Calendar </p>
                                        </a>
                                    </div>
                                    <div className='flex '>
                                        <a href="#">
                                            <p> <img src="../icon-reminders.svg" alt="" className='inline-block mr-2' /> Reminders </p>
                                        </a>
                                    </div>
                                    <div className='flex '>
                                        <a href="#">
                                            <p> <img src="../icon-planning.svg" alt="" className='inline-block mr-2' /> Planning </p>
                                        </a>
                                    </div>
                                </div>
                        </div>
                        
                        <div  
                            
                        >
                            <a href="#" 
                                className='hover:font-bold transition-all duration-300 ease-in '
                                onClick={() => dropDownMovil(companyMovil, setDropDownCompanyMovil)}
                            >
                                Company  <img src={companyMovil ? '../icon-arrow-up.svg' : '../icon-arrow-down.svg' } alt="" className='inline-block ml-2' />
                            </a>

                            <div className = {companyMovil ? 'flex flex-col pl-7 items-start gap-5 transition-all duration-300 ease-in mt-6' : 'hidden'}>
                                    <div className='flex '>
                                        <a href="">History</a>
                                    </div>
                                    <div className='flex '>
                                        <a href="">Our Team</a>
                                    </div>
                                    <div className='flex '>
                                        <a href="">Blog</a>
                                    </div>
                                </div>
                        </div>

                        <div>
                            <a href="">Careers</a>
                        </div>

                        <div>
                            <a href="">About</a>
                        </div>

                        <div className='flex flex-col items-center w-full gap-3'>
                            <div>
                                <p>Login</p>
                            </div>
                            <div className='w-full'>
                                <a href="" className='px-3 py-2 border border-black rounded-2xl block text-center'>Register</a>
                            </div>
                        </div>
                    </div>
                    </OutsideClickHandler>
                </div>
                 

            </div>

        <div className='flex gap-8 items-center content-center'>
            <a href="" className='hidden md:block'>Login</a>            
            <a href="" className='px-3 py-1 border-2 border-black rounded-xl     hidden md:block'>Register</a>
            {
                menuMovil ?  <MdOutlineClose size={40} className='md:hidden z-20 cursor-pointer' onClick={activarMenuMovil} />
                : <IoMenuSharp size={40} className='md:hidden z-20 cursor-pointer' onClick={activarMenuMovil}/>
            }
                        
        </div>

        
    </nav>
  )
}

export default Navbar