import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getPostagens = async (req, res) => {
    const postagens = await prisma.postagem.findMany({
        include: {
            categoria: true
        }
    })

    res.json({
        data: postagens,
        message: 'Postagens encontradas com sucesso'
    })
}

export const getPostagemPorId = async (req, res) => {

    const postagem = await prisma.postagem.findUnique({
        where: {
            id: parseInt(req.params.postagemId)
        },

        include: {
            categoria: true
        }
    })

    res.json({
        data: postagem,
        message: 'Postagens encontradas com sucesso'
    })
}

export const criarPostagem = async (req, res) => {
    const postagem = await prisma.postagem.create({
        data: {
            titulo: req.body.titulo,
            conteudo: req.body.conteudo,
            usuario: {
                connect: {
                    id: req.body.usuarioId
                }
            },
            categoria: {
                connect: req.body.categoriasIds // É um array de ids
            }
        }
    })

    res.json({
        data: postagem,
        message: 'Postagem criada com sucesso'
    })

}

export const atualizarPostagem = async (req, res) => {
    const postagem = await prisma.postagem.update({
        where: {
            id: parseInt(req.params.postagemId)
        },
        data: {
            titulo: req.body.titulo,
            conteudo: req.body.conteudo,
            categoria: {
                connect: req.body.categoriasIds // É um array de ids
            }
        }
    })

    res.json({
        data: postagem,
        message: 'Postagem atualizada com sucesso'
    })

}

export const deletarPostagem = async (req, res) => {

    const postagemDeletada = await prisma.postagem.delete({
        where: {
            id: parseInt(req.params.postagemId)
        }
    })

    res.json({
        data: postagemDeletada,
        message: 'Postagem deletada com sucesso'
    })
}

