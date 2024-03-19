import express from 'express';

import helloRouter from './Routes/hello.routes.js';

const app = express();
const port = 4000;

app.use('/', helloRouter);


app.get('/sobre', (req, res) =>{
    res.send('Rota sobre');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})