import express, {Application, json} from 'express'
import * as socketio from 'socket.io'
import * as path from 'path'
import indexRoutes from '../routes/index'
import morgan from 'morgan'
import { Request, Response } from 'express'
import cors, {CorsRequest, CorsOptions} from 'cors'

const app: Application = express()
const http = require("http").Serve(app)
const io = require("socket.io")(http)


//Setting
app.set('port',4001)
//middlewares
app.use(morgan('dev'))
io.on("connection", function(socket:any) {
    console.log("a user connected")
    socket.on("message", function(message: any) {
        console.log(message)
    })
})

/*const corsOptionsDelegate = function (req:CorsRequest, callback: (err: Error | null, options?: CorsOptions) => void ) {
    const corsOptions: CorsOptions = { 
        origin: '*', 
        allowedHeaders: '*', 
        credentials: true, 
        maxAge: 3600, 
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE" } 
    callback(null, corsOptions) // callback expects two parameters: error and options
}*/

app.use(cors({ credentials: true, origin: "*", allowedHeaders: '*' }));
//app.options('*', cors(corsOptionsDelegate));
app.use(json());

// routes
app.use(indexRoutes)
app.get("/userst", (req: Request,res: Response) => {res.json({hola: 'Mundo'})})
export default app;