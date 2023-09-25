import React from 'react'
import { LoginButton } from './LoginButton'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen -mt-16'>
        <h1 className=''>Login to get started</h1>
        <LoginButton />
    </div>
  )
}

export default Header