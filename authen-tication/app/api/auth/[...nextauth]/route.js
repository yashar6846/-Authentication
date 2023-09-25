import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/provider/github";

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientIdSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ]
})

export {handler as GET, handler as POST}

