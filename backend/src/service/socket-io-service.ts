import { CLIENT_URL } from "../config.keys";
import { Server, Socket } from "socket.io";
import { ServerType } from "../index";
import chalk from "chalk";

const chatService = (httpServer: ServerType): void => {
  const io = new Server(httpServer, {
    cors: {
      origin: CLIENT_URL,
      methods: ["GET", "POST"],
    },
  });



  io.on("connection", (socket: Socket) => {
    console.log(`A user ${chalk.green(socket.id.slice(0, 5))} connection`);
  });
};

export default chatService;
