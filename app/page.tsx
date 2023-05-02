import './globals.css'
import { Inter } from 'next/font/google'
import { Roboto } from "next/font/google"
import Sidebar from "./component/Sidebar"

export default function Home() {
  return (

    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Home</h1>
      <span className='text-7xl'>🏡</span>
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden mb-8" title="Woman holding a mug">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              Bienvenida
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">Página principal de aplicación para análisis de CSV</div>
            <p className="text-gray-700 text-base">La finalidad de esta aplicación web es dar métricas simples en base a un análisis de archivo CSV.</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Creado con NodeJS y ReactJS entre otras librerias.</p>
            </div>
          </div>
        </div>

    </div>

  )
}
