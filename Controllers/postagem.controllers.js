import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getPostagens = async (req, res) => {

}

export const getPostagemPorId = async (req, res) => {}

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

export const atualizarPostagem = async (req, res) => {}

export const deletarPostagem = async (req, res) => {}

