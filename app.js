import express from 'express';

import helloRouter from './Routes/hello.routes.js';
import categoriasRouter from './Routes/categorias.routes.js';
import usarioRouter from './Routes/usuarios.routes.js';
import postagensRouter from './Routes/postagens.routes.js';

const app = express();
const port = 4000;

app.use(express.json()); // middleware, padrão para trabalhar com json

app.use('/', helloRouter);
app.use('/', categoriasRouter);
app.use('/', usarioRouter);
app.use('/', postagensRouter); 


app.get('/sobre', (req, res) =>{
    res.send('Rota sobre');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})