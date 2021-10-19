import * as express from "express";
import {signUp, signIn} from '../controllers/authController'
import {getUser} from '../controllers/userController'
import   message from '../controllers/messageController'

const router: express.Router = express.Router()
// users routers
router.post("/signup", signUp)
router.post("/signin", signIn)
router.get("", getUser)

// message router
router.get("/messages", message.getAllMessage)

export default router