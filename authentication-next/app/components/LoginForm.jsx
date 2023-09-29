import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <div className={` grid place-items-center h-screen`}>
    {/*  <div className={`flex min-h-screen flex-col items-center justify-between p-24`}> */}
      <div className={` shadow-lg p-6 rounded-lg border-t-4 border-green-400`}>
        <h1 className={` text-xl font-bold m-4`}>Enter the detaile</h1>
        {/* form */}
        <form className={`flex flex-col gap-3 `} >
          <input type="text" placeholder='Emile' className="" />
          <input type="password" placeholder='Password' className="" />
          <button className=" cursor-pointer py-2 px-6 bg-green-600 font-bold text-white" onClick={''}>Login</button>

          <div className='bg-red-500 text-white w-fit text-sm py-1 rounded-md mt-2 px-3'>Error message</div>

          <Link className='text-sm mt-3 text-right' href={"/register"}>
            Dont have an account?<span className="underline">Register</span>
          </Link>
        </form>
      </div>
      </div>
  )
}

export default LoginForm