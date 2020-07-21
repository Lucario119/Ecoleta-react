import {Request, Response, response} from "express";
import knex from '../database/connection';

export default class ItemController {
    async Index(req:Request, res:Response) {
        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.1.12:3030/uploads/${item.image}`
            }
        })
        return res.json(serializedItems)
    }
}
