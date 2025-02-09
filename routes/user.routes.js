import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({ title: 'Get all users'}));
userRouter.get('/:id', (req, res) => res.send({ title: 'Get user detail'}));
userRouter.post('/', (req, res) => res.send({ title: 'Create new user'}));
userRouter.put('/:id', (req, res) => res.send({ title: 'Upate user by id'}));
userRouter.delete('/:id', (req, res) => res.send({ title: 'Delete a user by id'}));


export default userRouter;