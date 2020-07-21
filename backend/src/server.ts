import express from 'express';
import cors from "cors";
import path from 'path'
import routes from './routes';
import { errors } from "celebrate";

const app = express();

app.use(cors());
app.use(routes);
app.use(express.json())
app.listen(3030);

app.use(errors());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))