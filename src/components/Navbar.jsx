import React,{useState} from 'react'
import {Link, NavLink } from "react-router-dom"
import {Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from "./logo.png"
 
 

export default function Navbar() {

    let [open, setOpen] =useState(false);
    
    const handleClick = () => {
       
        window.scrollTo(0,0)
        setOpen(false)
    }

  return (
        
        <header className="shadow sticky z-50 top-0">
             <nav className="bg-white border-gray-200 px-4 md:px-6 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center mx-4">
                        <img
                            src={logo}
                            className="h-20 -mr-2"
                            alt="Logo"
                        />
                        <div className='flex flex-col item-center'>
                        <span className='font-bold text-xl text-gray-700 -mb-2'>NC</span>
                        <span className='font-bold text-xl text-gray-700'>Surgicals</span>
                         </div>
                    </Link>
                    <div
                        className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            <li onClick={() => (window.scrollTo(0,0))}>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li onClick={() => (window.scrollTo(0,0))}>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li onClick={() => (window.scrollTo(0,0))}>
                                <NavLink
                                to="/products"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li onClick={() => (window.scrollTo(0,0))}>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                        
                    </div>
                    <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon className=' '/> : <Bars3BottomRightIcon className=''/>
                }
            </div>
        
                </div>
                <div
                        className="justify-between items-center w-full md:w-auto md:order-1"
                        id="mobile-menu-2"
                    >
                        <ul  className={`fixed text-xl right-0 top-0 bottom-0 pl-12 pt-4 space-y-6 mt-20 font-bold bg-black transition-all ease-in-out duration-700 ${open ? 'left-10' : 'left-[1024px]'} opacity-90 md:hidden `}>
                            <li onClick={handleClick}>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li onClick={handleClick}>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li onClick={handleClick}>
                                <NavLink
                                to="/products"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li onClick={handleClick}>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </div>
            </nav>
        </header>
    );
  
}

