import { MockContext, Context, createMockContext } from './context';
import { updateIdea, createIdea } from './functions-with-context';

const fakePosts = [
    {
        id: 0,
        title: 'Nova ideia',
        description: 'Teste nova ideia',
        name: 'Daniela',
        email: 'dani@gmail.com',
        status: 'aproved'
    },
    {
        id: 1,
        title: 'Olá',
        description: 'descrição segunda ideia',
        name: 'Joao',
        email: 'joao@gmail.com',
        status: 'aproved'
    }
]

let mockCtx: MockContext
let ctx: Context

const prismaMock = {
    post: {
        create: jest.fn().mockReturnValue(fakePosts[0]),
        findMany: jest.fn().mockResolvedValue(fakePosts),
        findUnique: jest.fn().mockResolvedValue(fakePosts[0]),
        update: jest.fn().mockResolvedValue(fakePosts[0]),
        delete: jest.fn(), // O método delete não retorna nada
    },
};


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

test(`findAll`, async () => {
        prismaMock.post.create.mockResolvedValue(fakePosts)
        expect(fakePosts).toEqual(fakePosts);

    });


test(`findOne`, async () => {
        prismaMock.post.findUnique(fakePosts[0])
        expect(fakePosts[0]).toEqual(fakePosts[0]);
        expect(prismaMock.post.findUnique).toHaveBeenCalledWith(fakePosts[0]);
    });