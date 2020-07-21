import { Response, Request, response } from "express";
import knex from '../database/connection';

export default class PointsController {
    async Index(req:Request,res:Response) {
        const {city, uf, items} = req.query;

        const parsedItems = String(items).split(',')
        .map(item => Number(item.trim()));

        const places = await knex('places')
        .join('place_items', 'places.id', '=', 'place_items.place_id')
        .whereIn('place_items.item_id', parsedItems)
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('places.*');

        const serializedPlaces = places.map(place => {
            return {
                ...place,
                image_url:`http://192.168.1.12:3030/uploads/${place.image}`,
            };
        });
        return res.json(serializedPlaces);
    }

    async Show(req:Request, res:Response) {
        const { id } = req.params;

        const place = await knex('places')
        .where('id', id)
        .first();

        if (!place) {
            return res.status(400).json({message: 'Place not found'});
        }

        const serializedPlace = {
            ...place,
            image_url: `http://192.168.1.12:3030/uploads/${place.image}`
        };

        const items = await knex('items')
        .join('place_items', 'items.id', '=', 'place_items.item.id')
        .where('place_items.place_id',id)
        .select('items.title')

        return res.json({point: serializedPlace, items})
    }

    async Create(req: Request, res: Response) {
        const {
            image,
            name,
            email,
            city,
            uf,
            items
        } = req.body;

        const trx = await knex.transaction();

        const place = {
            image,
            name,
            email,
            city,
            uf
        };

        const insertIds = await trx('places').insert(place);

        const place_id = insertIds[0];

        const placeItems = items
        .split(',')
        .map((item: String) => Number(item.trim()))
        .map((item_id: Number) => {
            return {
                item_id,
                place_id
            }
        })

        await trx('place_items').insert(placeItems);

        await trx.commit();

        return response.json({
            id: place_id,
            ...place,
        });
    };
};