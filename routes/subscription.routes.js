import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: "get all subs" }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: "get sub details by id" }));
subscriptionRouter.post('/', (req, res) => res.send({ title: "create sub" }));
subscriptionRouter.put('/:id', (req, res) => res.send({ title: "update sub by id" }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: "delete sub by id" }));

subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: "get all subs of this user" }));
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: "cancel all subs of this user" }));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: "get upcoming renewals" }));



export default subscriptionRouter;