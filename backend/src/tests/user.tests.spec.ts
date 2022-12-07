import { MockContext, Context, createMockContext } from './context';
import { createUser, updateUserPassword } from './functions-with-context'

let mockCtx: MockContext
let ctx: Context


beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
})

test('should create new user ', async () => {
    const user = {
        id: 1,
        email: 'userTest@test.com',
        password: '123456'
    }
    mockCtx.prisma.user.create.mockResolvedValue(user)

    await expect(createUser(user, ctx)).resolves.toEqual({
        id: 1,
        email: 'userTest@test.com',
        password: '123456'
    })
})

test('should update a users password ', async () => {
    const user = {
        id: 1,
        email: 'userTest@test.com',
        password: '654321'
    }
    mockCtx.prisma.user.update.mockResolvedValue(user)

    await expect(updateUserPassword(user, ctx)).resolves.toEqual({
        id: 1,
        email: 'userTest@test.com',
        password: '654321'
    })
})

