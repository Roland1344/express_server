import express, { application } from 'express';
import { getUsers } from './model.js';

export const getAll = async (req: express.Request, res: express.Response) => {
    try {
        const data = await getUsers();
        res.status(200)
            .type("application/json")
            .send(data);
    }catch(error){
        res.status(500).type("application/json").send({error: "Users request failed."})
    }
}
export const addUser = (req: express.Request, res: express.Response) => {
    const newUser = req.body;

    try{
        const user = await createUser(newUser);
        res.status(201).type("application/json")
    }

}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    const id = parseInt(req.params.id!);
    res.status(200).type("application/json").send({ message: "successful" });

}