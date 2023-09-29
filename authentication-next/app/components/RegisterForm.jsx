 "use client"
 import Link from 'next/link'
import React, { useState } from 'react'
 
 const RegisterForm = () => {

     const [name, setName]= useState("")
     const [email, setEmail]= useState("")
     const [password, setPassword]= useState("")
     const [error, setError]= useState("")
   
       const handelSubmit = async(e) => {
        e.preventDefault()

        if(!name || !email || !password){
          setError('All fields are necessary.')
          return
        } 
        try {
          const res = await fetch(`api/register`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          })

          if(res.ok){
            const form = e.target
            form.reset()
          }else{
            console.log('User registration failed.');
          }
        } catch (error) {
          console.log('Error during registeration',error);
        }
       }

   return (
    <div className={` grid place-items-center h-screen`}>
      <div className={` shadow-lg p-6 rounded-lg border-t-4 border-green-400`}>
        <h1 className={` text-xl font-bold m-4`}>Register</h1>
        {/* form */}
        <form onSubmit={handelSubmit} className={`flex flex-col gap-3 `} >
          <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='Full Name' className="" />
          <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='Emile' className="" />
          <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Password' className="" />

          <button className=" cursor-pointer py-2 px-6 bg-green-600 font-bold text-white" onClick={''}>Register</button>

          {error && (
            <div className='bg-red-500 text-white w-fit text-sm py-1 rounded-md mt-2 px-3'>{error}</div>
          )}

          <Link className='text-sm mt-3 text-right' href={"/"}>
            Already have an account?<span className="underline">Login</span>
          </Link>
        </form>
      </div>
      </div>
   )
 }
 
 export default RegisterForm


