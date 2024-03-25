import express from 'express';

import helloRouter from './Routes/hello.routes.js';
import categoriasRouter from './Routes/categorias.routes.js';
import usarioRouter from './Routes/usuarios.routes.js';
import postagensRouter from './Routes/postagens.routes.js';

import multer from 'multer';

const app = express();
const port = 4000;
const forms = multer();
// app.use(bodyParser.json())

app.use(express.json()); // middleware, padrão para trabalhar com json

app.use(express.urlencoded({extended: true})); // middleware para trabalhar com formulários

app.use('/public', express.static('public')); // middleware para servir arquivos estáticos

app.use('/', helloRouter);
app.use('/categorias', categoriasRouter);
app.use('/usuarios', usarioRouter);
app.use('/postagens', postagensRouter); 


app.get('/sobre', (req, res) =>{
    res.send('Rota sobre');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})