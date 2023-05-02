"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react';
import { FaHome, FaFileUpload,FaExclamationCircle } from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi"

const Sidebar = () =>{
    return(
        <div>
            <Disclosure as="nav">
                <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring2 focus:ring-inset focus:ring-white group">
                    <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true"/>
                </Disclosure.Button>
                <div className='p-6 w-1/2 h-screen bg-white z-20 fixed top-0  lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
                    <div className="flex flex-col justify-start items-center">
                        <h1 className="text-base text-center cursor-point font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                            Desafio React Node                    
                        </h1>
                        <div className='my-4 border-b border-gray-100 pb-4'>
                            <Link href="/">
                            <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                                <FaHome className='text-2x1 text-gray-600 group-hover:text-white'/>
                                <h3 className='text-base text-gray-800 group-hover:text-white'>
                                    Inicio
                                </h3> 
                            </div>
                            </Link>
                            <Link href="/archivo">
                            <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                                <FaFileUpload className='text-2x1 text-gray-600 group-hover:text-white'/>
                                <h3 className='text-base text-gray-800 group-hover:text-white'>
                                    Subir Archivo
                                </h3> 
                            </div>
                            </Link>
                            <Link href="/about">
                            <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                                <FaExclamationCircle className='text-2x1 text-gray-600 group-hover:text-white'/>
                                <h3 className='text-base text-gray-800 group-hover:text-white'>
                                    Créditos
                                </h3> 
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Disclosure>
        </div>

        /*
        <div className='flex'>
            <div className='fixed w-30 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <div className='bg-purple-800 text-black p-3 rounded-lg inline-block'>
                        <FaHome />Inicio
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                    <Link href='/archivo'>
                    <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                            Subir archivo
                    </div>
                    </Link>
                </div>
            </div>
        </div>*/
    )

}

export default Sidebar