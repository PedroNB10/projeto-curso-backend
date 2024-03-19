import express from 'express';

import * as helloController from '../Controllers/hello.controller.js';

const router = express.Router();

router.get('/', helloController.hello);

export default router;