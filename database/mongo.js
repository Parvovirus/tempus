// para conectar la base de datos
const mongoose = require("mongoose");

require('dotenv').config()

mongoose
  .connect(process.env.MONGO_URL, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect DateBase Mongo" + url);
  })
  .catch((err) => {
    console.error(err);
  });
