const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/");
const cors = require("cors");

<<<<<<< HEAD
const router = require('./routes/index')

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json())

server.use("/rickandmorty", router)

server.listen(PORT, () => {
  console.log(`Reading on port ${PORT}`);
});
=======
server.use(cors());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, () => console.log("Server raised in port: " + PORT));
>>>>>>> 63184caa624868dc907ae13fdc5819a61015c833
