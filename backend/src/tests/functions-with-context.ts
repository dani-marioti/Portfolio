import { Context } from './context';
interface CreateUser {
    email: string
    password: string
}

export async function createUser(user: CreateUser, ctx: Context) {
    return await ctx.prisma.user.create({
        data: user,
    })
}

interface UpdateUser {
    id: number
    email: string
    password: string
}

export async function updateUserPassword(user: UpdateUser, ctx: Context) {
    return await ctx.prisma.user.update({
        where: { id: user.id },
        data: user,
    })
}

interface CreateIdea {
    id: number,
    title: string
    description: string
    name: string
    email: string
    status: string
}

export async function createIdea(idea: CreateIdea, ctx: Context) {
    return await ctx.prisma.idea.create({
        data: idea,
    })
}
interface UpdateIdea {
    id: number,
    title: string
    description: string
    name: string
    email: string
    status: string
}

export async function updateIdea(idea: UpdateIdea, ctx: Context) {
    return await ctx.prisma.idea.update({
        where: { id: idea.id },
        data: idea,
    })
}