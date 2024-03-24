
import express from 'express';

import * as usuarioController from '../Controllers/usuario.controllers.js';
import autorizarUsuario from '../Middlewares/auth.middleware.js';

const router = express.Router();

// CRUD
// Criação, atualização, remoção, retornar todos os usuários, retornar um usuário

router.post('/', usuarioController.criarUsuario);

router.post('/login', usuarioController.login);

router.put('/:usuarioId', usuarioController.atualizarUsuario);

router.delete('/:usuarioId', usuarioController.deletarUsuario);

router.get('/',autorizarUsuario, usuarioController.getUsuarios); // para essa rota precisa estar logado

router.get('/:usuarioId', usuarioController.getUsuarioPorId);



export default router;