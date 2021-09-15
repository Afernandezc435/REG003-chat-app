import * as express from "express"
import userRoutes from '../routes/user'

const router: express.Router = express.Router()

router.use("/users", userRoutes)
/*
router.use("/channels")
router.use("/userChannels")
router.use("/messages")
*/

export default router;