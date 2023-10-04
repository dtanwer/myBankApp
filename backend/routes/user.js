import express from 'express';
import {getUser,getUsers,updateUser,deleteUser} from '../controller/user.js';
import verifyToken from '../middleware/verifyToken.js';
const router = express.Router();

router.get('/',verifyToken,getUsers);
router.get('/:id',verifyToken,getUser).put('/:id',verifyToken,updateUser).delete('/:id',verifyToken,deleteUser);


export default router;


