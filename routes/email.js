import express from 'express';

import {getAmount} from '../controllers/email.js';

const router = express.Router();

router.post('/', getAmount);

export default router;