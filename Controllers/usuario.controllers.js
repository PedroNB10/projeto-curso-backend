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

export const atualizarUsuario = async (req, res) => {}

export const deletarUsuario = async (req, res) => {}

export const getUsuarios = async (req, res) => {}

export const getUsuarioPorId = async (req, res) => {}

