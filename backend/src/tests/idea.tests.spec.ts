import { MockContext, Context, createMockContext } from './context';
import { updateIdea, createIdea } from './functions-with-context';

let mockCtx: MockContext
let ctx: Context


beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
})

test('should create new idea ', async () => {
    const idea = {
        id: 1,
        title: 'Nova idea',
        description: 'Criando nova ideia',
        name: 'Daniela',
        email: 'dani@gmail.com',
        status: 'Pendente'
    }
    mockCtx.prisma.idea.create.mockResolvedValue(idea)

    await expect(createIdea(idea, ctx)).resolves.toEqual({
        id: 1,
        title: 'Nova idea',
        description: 'Criando nova ideia',
        name: 'Daniela',
        email: 'dani@gmail.com',
        status: 'Pendente'
    })
})

test('should update idea ', async () => {
    const idea = {
        id: 1,
        title: 'Alterando Ideia',
        description: 'Alterando ideia',
        name: 'Daniela',
        email: 'dani@gmail.com',
        status: 'Pendente'
    }
    mockCtx.prisma.idea.update.mockResolvedValue(idea)

    await expect(updateIdea(idea, ctx)).resolves.toEqual({
        id: 1,
        title: 'Alterando Ideia',
        description: 'Alterando ideia',
        name: 'Daniela',
        email: 'dani@gmail.com',
        status: 'Pendente'
    })
})

