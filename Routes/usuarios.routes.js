
import express from 'express';

import multer from 'multer';
import path from 'path';
import * as usuarioController from '../Controllers/usuario.controllers.js';
import autorizarUsuario from '../Middlewares/auth.middleware.js';
import autorizarAdmin from '../Middlewares/admin.middleware.js';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const router = express.Router();
const upload = multer({storage: storage});
// CRUD
// Criação, atualização, remoção, retornar todos os usuários, retornar um usuário

router.post('/', usuarioController.criarUsuario);

router.put('/upload/:usuarioId', upload.single('fotoPerfil'), usuarioController.uploadAvatar);

router.post('/login', usuarioController.login);

router.put('/:usuarioId', usuarioController.atualizarUsuario);

router.delete('/:usuarioId', usuarioController.deletarUsuario);

router.get('/', usuarioController.getUsuarios); // para essa rota precisa estar logado

router.get('/:usuarioId', usuarioController.getUsuarioPorId);



export default router;