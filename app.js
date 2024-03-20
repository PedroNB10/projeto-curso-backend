import express from 'express';

import helloRouter from './Routes/hello.routes.js';
import CategoriasRouter from './Routes/categorias.routes.js';

const app = express();
const port = 4000;

app.use(express.json()); // middleware, padrão para trabalhar com json

app.use('/', helloRouter);
app.use('/', CategoriasRouter);


app.get('/sobre', (req, res) =>{
    res.send('Rota sobre');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})