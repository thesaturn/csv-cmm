import Link from 'next/link'

export default function About() {
    return (
  
      <div className='flex h-full flex-col justify-center items-center'>
        <h1 className='text-4xl mb-5 font-bold'>Créditos</h1>
        <span className='text-7xl mb-5'>❗</span>
        <p>Esta aplicación a sido desarrollada por lo descrito a continuación:</p>
          <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">Nombre</th>
                      <th scope="col" className="px-6 py-4">Fono</th>
                      <th scope="col" className="px-6 py-4">Linkedin</th>
                      <th scope="col" className="px-6 py-4">Github</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">Manuel Bugueño</td>
                      <td className="whitespace-nowrap px-6 py-4">+56990181897</td>
                      <td className="whitespace-nowrap px-6 py-4 text-blue-600"><Link href="https://www.linkedin.com/in/manuel-b-eastman-60b785263/">Linkedin</Link></td>
                      <td className="whitespace-nowrap px-6 py-4 text-blue-600"><Link href="https://www.github.com/thesaturn">thesaturn</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  
    )
  }
  