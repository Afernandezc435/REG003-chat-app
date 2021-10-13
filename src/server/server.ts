import express, {Application, json} from 'express'
import * as socketIo from 'socket.io'
import * as path from 'path'
import indexRoutes from '../routes/index'
import morgan from 'morgan'
import { Request, Response } from 'express'
import cors, {CorsRequest, CorsOptions} from 'cors'
import * as http from 'http'
import sockets from '../socket/sockets'


const app: Application = express()
const httpServer = http.createServer(app);
const io = new socketIo.Server(httpServer);

sockets(io)
//Setting
app.set('port',4001)
//middlewares
app.use(morgan('dev'))
//Socket.io setup
app.use(cors({ credentials: true, origin: "*", allowedHeaders: '*' }));
//app.options('*', cors(corsOptionsDelegate));
app.use(json());

// routes
app.use(indexRoutes)
export default app;