import React from 'react'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

export default function Signup() {
   
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className="bg-neutral-400 w-full h-screen flex direction-col justify-center items-center dark:bg-slate-900">
      <div className="bg-white text-black border-2  py-6 px-10 rounded-lg shadow-2xl dark:opacity-70">

        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost relative left-80 bottom-4">
            <ImCross className='text-md' /> </Link>
        </form>
        
        <form  onSubmit={handleSubmit(onSubmit)}>
        {/* hard code data section */}
        <h3 className="text-pink-500 font-bold text-2xl">SignUp</h3>

        {/* username */}
        <div className='mt-3'>

          <span className='font-bold'>username</span>

          <br />

          <input 
          type="text" 
          placeholder='Enter your username' 
          className='bg-white outline-none w-80  h-10 border-2 border-slate-700 py-1 px-2 rounded-md mt-1 font-semibold'
          {...register("username", { required: true })}/>

          <br/>
          {errors.username && <span className='text-sm font-semibold text-red-500'>username is required*</span>}

        </div>


        {/* email */}
        <div className='mt-3'>

          <span className='font-bold'>Email</span>

          <br />

          <input type="email" placeholder='Enter your email' className='bg-white outline-none w-80  h-10 border-2 border-slate-700 py-1 px-2 rounded-md mt-1 font-semibold' 

           {...register("email", { required: true })}/>
           <br/>

           {errors.email && <span className='text-sm font-semibold text-red-500'>email is required*</span>}
        </div>



        {/* password */}
        <div className='mt-3'>

          <span className='font-bold'>password</span>

          <br />

          <input type="password" placeholder='Enter your password' className='bg-white outline-none w-80 h-10 border-2 border-slate-700 py-1 px-2 rounded-md mt-1 font-semibold' 

          {...register("password", { required: true })} />

          <br/>

           {errors.password && <span className='text-sm font-semibold text-red-500'>password is required*</span>}

        </div>


        {/* signup btn */}
        <div className='mt-12 flex justify-between items-end w-80'>
          <button type='submit'  className='btn min-h-10 h-10 bg-pink-500 text-white border-none hover:bg-pink-600'>Sign-up</button>

          <p className='font-semibold mr-5'>already registered?
            <span >
              <button
                className='text-blue-600 landing-7 hover:text-blue-800 hover:underline'
                onClick={()=>document.getElementById('my_modal_3').showModal()}
              >login
              </button>
              <Login/>

            </span>
          </p>
        </div>

        </form>

      </div>

    </div>
  )
}
