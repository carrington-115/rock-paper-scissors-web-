require("dotenv").config({ path: "/.env" });
const { createServer } = require("http");
const { Server } = require("socket.io");
const server = createServer();
const socket = new Server(server, {});

socket.on("connection", (socket) => {
  socket.emit("message", "hello world");
});

server.listen(process.env.PORT);
