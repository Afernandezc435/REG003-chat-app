import express, {Application, json} from 'express'
import indexRoutes from '../routes/index'
import morgan from 'morgan'
import { Request, Response } from 'express'

const app: Application = express()

//Setting
app.set('port',3000)
//middlewares
app.use(morgan('dev'))
app.use(json())
// routes
app.use(indexRoutes)
app.get("/userst", (req: Request,res: Response) => {res.json({hola: 'Mundo'})})
export default app;