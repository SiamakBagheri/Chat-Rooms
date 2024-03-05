const { createServer } = require("node:http");

const express = require("express");
const { Server } = require("socket.io");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static("public"));

server.listen(PORT, () =>
  console.log(`Server run in http://localhost:${PORT}`),
);

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
