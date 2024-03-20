import { PrismaClient } from "@prisma/client"

// CRUD (create, read, delete)

// query (bsca, procura do banco de dados)
const prisma = new PrismaClient()

export const  getCategorias = async (req, res) => {
    const categorias = await prisma.categoria.findMany()

    res.json({
        data: categorias,
        msg: 'Categorias encontradas com sucesso'
    })
}

export const criarCategoria = async (req, res) => {
    const nome = req.body.nome

    const categoria = await prisma.categoria.create({
        data: {
            nome: nome
            
        }
    })

    res.json({
        data: categoria,
        msg: 'Categoria criada com sucesso'
    })
}

export const deletarCategoria = async (req, res) => {
    const id = Number(req.params.id)

    const categoria = await prisma.categoria.delete({
        where: {
            id: parseInt(req.params.id) // é um parâmetro da rota, aparece na url
        }
    })

    res.json({
        msg: 'Categoria deletada com sucesso'
    })
}