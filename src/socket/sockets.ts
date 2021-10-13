import { Socket } from 'socket.io'
import messageController from '../controllers/messageController'

const sockets = (io:any) => {
  io.on("connection", (socket:Socket) => {
    socket.on("message-send", async data => {
      const response = await messageController.createMessage(data)
      io.emit("message-receive", response)
    })
  })
}

export default sockets 