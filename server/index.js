const express = require("express");
const compression = require("compression");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const config = require("./config");
const routes = require("../routes");
const handle = routes.getRequestHandler(app);

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const secretData = [
  {
    title: "SecretData 1",
    description: "Plans how to build spaceship",
  },
  {
    title: "SecretData 2",
    description: "My secret passwords",
  },
];

mongoose
  .connect(config.DB_URI, {
    useUnifiedTopology: true,
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.error(err));

mongoose.Promise = global.Promise;

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use("/api/v1/auth", authRoutes, userRoutes);

    server.get("/api/v1/test", (req, res) => {
      return res.json(secretData);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(function (err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res
          .status(401)
          .send({ title: "Unauthorized", detail: "Unauthorized Access!" });
      }
    });

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, (err) => {
      if (err) throw err;
      console.log("> Ready on port " + PORT);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
