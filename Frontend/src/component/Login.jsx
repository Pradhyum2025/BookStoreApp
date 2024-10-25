import React from 'react'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function Login() {
   
  //useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal dark:bg-slate-900">
  <div className="modal-box bg-white text-black dark:opacity-70">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute  right-2 top-2"><ImCross/></button>
    </form>

     <form onSubmit={handleSubmit(onSubmit)}>

    {/* hard code data section */}
    <h3 className="text-pink-500 font-bold text-2xl">Login</h3>

    {/* email */}
     <div className='mt-3'>
      <span className='font-bold'>Email</span>
      <br />
      <input type="email" placeholder='Enter your email' className='bg-white outline-none w-10/12  h-10 border-2 border-slate-700 py-1 px-2 rounded-md mt-1 font-semibold' 
       {...register("email", { required: true })}/>
       <br/>
        {errors.email && <span className='text-sm font-semibold text-red-500'>email is required*</span>}
     </div>
     
      {/* password */}
      <div className='mt-3'>
      <span className='font-bold'>password</span>
      <br />
      <input type="password" placeholder='Enter your password' className='bg-white outline-none w-10/12 h-10 border-2 border-slate-700 py-1 px-2 rounded-md mt-1 font-semibold'
       {...register("password", { required: true })}/>
       <br/>
        {errors.password && <span className='text-sm font-semibold text-red-500'>password is required*</span>}
     </div>


     {/* login btn */}
     <div className='mt-12 flex justify-between items-end'>
      <button className='btn min-h-10 h-10 bg-pink-500 text-white border-none hover:bg-pink-600'>Login</button>

      <p className='font-semibold mr-5'>Not registered?<span ><Link className='text-blue-600 landing-7 hover:text-blue-800 hover:underline
      ' to="/signup"> signUp</Link> </span></p>
     </div>

  </form>

  </div>

</dialog>
    </div>
  )
}
