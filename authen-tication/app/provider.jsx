"use client"

export {SessionProvider} from "next-auth/react"
export const NextAuthProvider = ({children})=>{
    return <SessionProvider>{children}</SessionProvider>
}