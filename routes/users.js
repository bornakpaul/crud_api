import express from 'express';
import { allUsers,createUser,userDetail,deleteUser,editUserDetails } from '../controllers/user.js';

const router = express.Router();

router.get('/', allUsers);
router.post('/', createUser);
router.get('/:id', userDetail);
router.delete('/:id', deleteUser);
router.patch('/:id', editUserDetails);

export default router;