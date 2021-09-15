import * as express from "express";
import {signUp, signIn} from '../controllers/authController'
import {getUser} from '../controllers/userController'

const router: express.Router = express.Router()
// users routers
router.get("auth")
router.post("/signup", signUp)
router.post("/signin", signIn)
router.get("", getUser)

export default router