import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const criarUsuario = async (req, res) => {
    console.log(req.body);
    const usuario = await prisma.usuario.create({
        data: {
            email: req.body.email,
            senha: req.body.senha,
            role: req.body.role,
            perfil: { // perfil é uma relação 1 para 1, por isso é um objeto que também é um modelo dentro do modelo de usuário
                create: {
                    nome: req.body.nome,
                    telefone: req.body.telefone,
                    nascimento: new Date(req.body.nascimento).toISOString(),
                    bio: req.body.bio,
                }
            }
        }
    })

    res.json({
        data: usuario,
        msg: 'Usuário criado com sucesso'
    })
}

export const atualizarUsuario = async (req, res) => {
    const usuario = prisma.usuario.update({
        where: {
            id: parseInt(req.params.usuarioId)

        },
        data: {
            email: req.body.email,
            perfil: {
                update: {
                    nome: req.body.nome,
                    telefone: req.body.telefone,
                    nascimento: new Date(req.body.nascimento),
                    bio: req.body.bio,
                }
            }
        }
    })

    res.json({
        data: usuario,
        msg: 'Usuário atualizados com sucesso'
    })
}




export const  getUsuarios = async (req, res) => {
    const usuarios = await prisma.usuario.findMany({
        where: {
            perfil: {
                nome: {
                    contains: req.query.nome  // se tiver um nome na query, ele vai filtrar os usuários que contém esse nome, senão ele vai trazer todos os usuários
                
                },
                telefone:{
                    contains: req.query.telefone
                
                }
            }
        },

        include: {
            perfil: true
        }
    })

    res.json({
        data: usuarios,
        msg: 'Usuarios encontrados com sucesso'
    })
}



export const getUsuarioPorId = async (req, res) => {
    const usuario = await prisma.usuario.findUnique({
        where: {
            id: parseInt(req.params.usuarioId)
        },
        include: {
            perfil: true
        }
    })

    res.json({
        data: usuario,
        msg: 'Usuario encontrado com sucesso'
    })
}

export const deletarUsuario = async (req, res) => {
    const perfilDeletado = await prisma.perfil.deleteMany({  // no caso do delete() somente é possível fazer o delete do perfil por meio do id do perfil, para usar outros paâmetros é necessário usar o deleteMany()
        where: {
            usuario: {
                id: parseInt(req.params.usuarioId)
            }
        }
    })

    res.json({
   
        msg: 'Perfil deletado com sucesso'
    })

}