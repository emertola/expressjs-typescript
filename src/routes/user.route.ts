import { Router } from 'express';
import { createUserHandler, getAllUsers, getUserById } from '../handlers';
import { checkSchema } from 'express-validator';
import { createUserValidationSchema, getUsersListSchema } from '../utils';

const router = Router();

router.get('/', checkSchema(getUsersListSchema, ['query']), getAllUsers);

router.get('/:id', getUserById);

router.post(
  '/create',
  checkSchema(createUserValidationSchema),
  createUserHandler
);

export default router;
