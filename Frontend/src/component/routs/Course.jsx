import React from 'react'
import course from "../../../public/list.json"
import CourseBookCard from '../CourseBookCard';

export default function Course() {
  const paidBook = course.filter((book)=>book.catagory!="Free");
  return (
    <div className="p-7">
      <h2 className='text-3xl md:text-4xl font-bold mt-2 text-black dark:text-white'>
      Hello welcomes here to learn something <span className='pink-heading'>new everyday!!</span>
     </h2>
     <p className='lg:text-base lg:font-semibold mt-4 text-black dark:text-white'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis aperiam eveniet earum vero repellat. Neque laborum laboriosam incidunt repudiandae suscipit, accusantium voluptates odit. Minima.
     </p>
   <div className="course">
    <div className=' w-full md:w-11/12 flex flex-wrap md:justify-center gap-x-20 gap-y-9'>
      {
        paidBook.map((book)=>{
          return <CourseBookCard key={book.id} freeBook={book}/>
        })
      }
    </div>
   </div>
    </div>
  )
}
