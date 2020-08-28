import { Request, Response } from 'express';
import db from '../database/connection';

export default class ClientController {
   async create(request: Request, response: Response) {
        const {
            name,
            age,
            numberPhone,
        } = request.body;

       const trx = await db.transaction();

       try {
            const insertClient = await trx('client').insert({
                name,
                age,
                numberPhone,
            });
            
            await trx.commit();

            return response.status(201).send();
       } catch (err) {
           await trx.rollback();

           return response.status(400).json({
                error: 'Unexpected error while creating new client'
           });
       }
   }
}