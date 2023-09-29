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
        </form>
      </div>
      </div>
  )
}

export default LoginForm