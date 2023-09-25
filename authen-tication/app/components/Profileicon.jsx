"use client"

import { signIn } from "next-auth/react"

const Profileicon = () => {
  return (
    <button onClick={()=> signIn('github')}>Sign In</button>
  )
}

export default Profileicon