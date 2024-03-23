import express from 'express';

import * as CategoriasController from '../Controllers/categoria.controllers.js';

const router = express.Router();

router.get('/', CategoriasController.getCategorias);
router.post('/', CategoriasController.criarCategoria);
router.delete('/:id', CategoriasController.deletarCategoria);

export default router;