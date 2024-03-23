
import express from 'express';

import * as usuarioController from '../Controllers/usuario.controllers.js';

const router = express.Router();

// CRUD
// Criação, atualização, remoção, retornar todos os usuários, retornar um usuário

router.post('/', usuarioController.criarUsuario);

router.put('/:usuarioId', usuarioController.atualizarUsuario);

router.delete('/:usuarioId', usuarioController.deletarUsuario);

router.get('/', usuarioController.getUsuarios);

router.get('/:usuarioId', usuarioController.getUsuarioPorId);



export default router;