import express from 'express';

import * as postagemController from '../Controllers/postagem.controllers.js';

const router = express.Router();

router.post('/postagem', postagemController.criarPostagem);
router.put('/postagem/:postagemId', postagemController.atualizarPostagem);
router.get('/postagem', postagemController.getPostagens);
router.get('/postagem/:postagemId', postagemController.getPostagemPorId);
router.delete('/postagem/:postagemId', postagemController.deletarPostagem);
export default router;