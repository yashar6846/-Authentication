"use client"

import { useSession } from 'next-auth/react'
import { LoginButton } from './LoginButton'

const Header = () => {
    const { data: session, status} = useSession()

    if(status === 'authenticated') {
        return (
            <div className='flex flex-col items-center justify-center h-screen -mt-16'>
                <h1 className=''>Welcome</h1>
                <span className=' font-bold text-2xl'>{session.user.name}</span>
            </div>
          )
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen -mt-16'>
        <h1 className=''>Login to get started</h1>
        <LoginButton />
    </div>
  )
}

export default Header