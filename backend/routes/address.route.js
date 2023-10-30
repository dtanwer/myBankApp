import { Router } from 'express';
import{createAddress, getAddress,getAddresses, updateAddress, deleteAddress} from '../controller/address.controller.js';
const router = Router();

router.post('/', createAddress).get('/', getAddresses);
router.get('/:id', getAddress).put('/:id', updateAddress).delete('/:id', deleteAddress);

export default router;
