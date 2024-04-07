import { Router } from 'express';
import { createUser, getAllUsers, getUserById } from '../handlers';

const router = Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/create', createUser);

export default router;
