"use client";

import { useState } from 'react';
import Card from "../component/Card"
import { InferGetStaticPropsType,GetStaticProps } from 'next';

async function apiData() {
  const response = await fetch('/api/data', {
    method: 'POST',
  });

  const posts = await response.json();
  console.log(posts)
  return posts;
}

function CSVUploader() {

  const [file, setFile] = useState<File | null>(null);
  const [datos, setDatos] = useState([null])
  const [apiResponse, setApiResponse] = useState<any[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file,file.name);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: file,
          headers: {
            'Content-Type': 'application/octet-stream'
          },
        });

        if (response.ok) {
          alert('Archivo subido exitosamente.')
        } else {
          console.error('Error subiendo el archivo.');
          alert('Error subiendo el archivo.')
        }
      } catch (error) {
        console.error('Error subiendo archivo:', error);
        alert('Error subiendo el archivo.')
      }
    }
  };

  const handleInsight = async () => {
    try {
      const data = await apiData();

      setApiResponse(data);
    } catch (error) {
      console.error('Error en fetch de datos:', error);
    }
};

  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <span className='text-7xl'>📁</span>
      <h1 className='text-4xl mb-5 font-bold'>Archivo</h1>
      <input className='mb-5' type="file" onChange={handleFileChange} />
      <div className='flex flex-row'>
        <button className='bg-transparen mr-5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-5' onClick={handleUpload}>Subir Archivo</button>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-5' onClick={handleInsight}>Calcular</button>
      </div>
      <div className='flex'>
      <div id='card' className="max-w-sm rounded overflow-hidden shadow-lg ">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Datos</div>
            </div>
            <div className="px-6 pt-4 pb-2">
             {apiResponse.map((data,i) => 
              <div key={i}>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-6 py-4">Metrica</th>
                              <th scope="col" className="px-6 py-4">Valor</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">Total Personas</td>
                              <td className="whitespace-nowrap px-6 py-4">{data.total}</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">Total Personas U de Chile</td>
                              <td className="whitespace-nowrap px-6 py-4">{data.institucion_uchile}</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">Porcentaje Personas U de Chile</td>
                              <td className="whitespace-nowrap px-6 py-4">{data.promedio_uchile}%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default CSVUploader;