import express from "express";
import { celebrate, Joi } from "celebrate";

import PointsController from "./controllers/Pointscontroller";
import ItemsController from "./controllers/Itemscontroller";

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.Index);
routes.get("/places", pointsController.Index);
routes.get("/places/:id", pointsController.Show);

routes.post(
  "/places",
  celebrate(
    {
      body: Joi.object().keys({
        image: Joi.string().required(),
        name: Joi.string().required(),
        email: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  pointsController.Create
);

export default routes;
