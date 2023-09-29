import React from 'react'

 const UserInfo = () => {
  return (
    <div className='grid place-items-center h-screen'>
    <div className=" shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
      <div className="">
        Name: <span className="font-bold">Jone</span>
      </div>

      <div className="">
        Emale: <span className="font-bold">jone@gmail.com</span>
      </div>
       <button className=" bg-red-500 text-white font-bold px-6 mt-3 py-2">Log Out</button>
    </div>
    </div>
  )
}
export default UserInfo