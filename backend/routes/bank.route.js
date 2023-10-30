import {
    postBank,
    getBanks,
    getBank,
    updateBank,
    deleteBank,
} from '../controller/bank.controller.js';
import { Router } from 'express';
const router = Router();

router.post('/', postBank).get('/', getBanks)
router.get('/:id', getBank).put('/:id', updateBank).delete('/:id', deleteBank);

export default router;