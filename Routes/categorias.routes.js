import express from 'express';

import * as CategoriasController from '../Controllers/categoria.controllers.js';

const router = express.Router();

router.get('/categorias', CategoriasController.getCategorias);
router.post('/categorias', CategoriasController.criarCategoria);

export default router;