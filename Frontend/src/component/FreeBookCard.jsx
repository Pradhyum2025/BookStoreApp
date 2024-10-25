import React from 'react'

export default function BookCard({freeBook}) {
  console.log(freeBook) 
  return (
    <div className="card border p-1  text-black bg-slate-100  hover:scale-105 duration-200 shadow-lg dark:bg-black dark:text-white">
    <img className="rounded-xl" src={freeBook.image} alt="Card image cap"/>
    <div className="card-body p">

    <div>
       <p  className="text-fuchsia-400 text-2xl font-bold">{freeBook.name}</p>
        </div>

      <div className='flex'> 
        <span className="text-base font-semibold">{freeBook.title}</span>
         <span class="badge badge-primary  bg-blue-200  badge-outline font-semibold dark:text-white">Free</span> 
         </div>

      <div className='w-full flex items-center justify-between '>

      <a href="#" className="bg-fuchsia-400 rounded-md p-2 text-white w-25 border-none font-semibold">Read now</a>

      <span className="bg-pink-200  text-xl font-bold border-2 border-red-300 px-4 py-1 rounded-2xl dark:text-black">${freeBook.price}</span>
    </div>

      </div>
  </div>
  )
}
