import { Context } from './context'
import db from '../db'


interface CreateUser {
    email: string
    password: string
}

interface UpdateUser {
    id: number
    email: string
    password: string
}

export async function createUser(user: CreateUser, ctx: Context) {
    return await ctx.prisma.user.create({
        data: user,
    })
}

export async function updateUsername(user: UpdateUser, ctx: Context) {
    return await ctx.prisma.user.update({
        where: { id: user.id },
        data: user,
    })
}
