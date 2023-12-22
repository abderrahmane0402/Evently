"use server"
import { prisma } from "../prisma"
import { handleError } from "../utils"

export const AuthUser = (email: string) => {
  try {
    return prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        password: true,
      },
    })
  } catch (error) {
    handleError(error)
    return null
  }
}
