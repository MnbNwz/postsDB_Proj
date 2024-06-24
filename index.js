const express = require("express");
const app = express();
const db = require("./models");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const routes = require("./routes/index");
const cors = require("cors");

// importing routes
const postRouters = require("./routes/Posts");

//configure dotenv
dotenv.config();

//port
const port = process.env.PORT || 8080;

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//listening
app.get("/test", (req, res) => res.status(200).send("<h3>Welcome</h3>"));

//Routers
app.use("/api", routes);

// app.use("/posts", postRouters);

db.sequelize.sync().then(() => {
  app.listen(port, () =>
    console.log(`Connected and running on port ${port}`.bgCyan)
  );
});
