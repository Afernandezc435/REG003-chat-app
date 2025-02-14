import express, {Application} from 'express'
import authRoutes from '../routes/auth'
import morgan from 'morgan'

const app: Application = express()

//Setting
app.set('port',3000)
//middlewares
app.use(morgan('dev'))
// routes
app.use(authRoutes)
export default app;