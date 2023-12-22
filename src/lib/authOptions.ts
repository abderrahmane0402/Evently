// import { NextAuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { AuthUser } from "./actions/auth.action"

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Sign In",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "@gmail.com",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//         },
//       },
//       async authorize(credentials) {
//         if (!credentials || !credentials.email || !credentials.password)
//           return null
//         const user = await AuthUser(credentials.email)
//         if (!user) return null
//         if (user.password !== credentials.password) return null
//       },
//     }),
//   ],
// }
