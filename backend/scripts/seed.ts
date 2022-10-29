import { PrismaClient } from "@prisma/client";

const db = new PrismaClient()

const seed = async () => {
  await db.user.create({
    data: {
      email: 'dani.marioti@gmail.com',
      password: '123456'
    }
  })

  console.log('user created')
}

seed()