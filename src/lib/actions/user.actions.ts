"use server"
import { prisma } from "../prisma"
import { handleError } from "../utils"

export const createUser = async (user: any) => {
  try {
    const newUser = await prisma.user.create({ data: user })
    return newUser
  } catch (e) {
    handleError(e)
    return null
  }
}
