
import express from 'express';

import * as usuarioController from '../Controllers/usuario.controllers.js';

const router = express.Router();

// CRUD
// Criação, atualização, remoção, retornar todos os usuários, retornar um usuário

router.post('/usuarios', usuarioController.criarUsuario);

router.put('/usuarios', usuarioController.atualizarUsuario);

router.delete('/usuarios/:usuarioId', usuarioController.deletarUsuario);

router.get('/usuarios', usuarioController.getUsuarios);

router.get('/usuario/:usuarioId', usuarioController.getUsuarioPorId);



export default router;