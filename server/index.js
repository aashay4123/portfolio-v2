const express = require("express");
const compression = require("compression");
const next = require("next");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const config = require("./config");
const routes = require("../routes");
const handle = routes.getRequestHandler(app);

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const portfolioRoutes = require("./routes/portfolio");
const blogRoutes = require("./routes/blog");
const projectRoutes = require("./routes/project");

const robotsOptions = {
  root: path.join(__dirname, "../public/static"),
  headers: {
    "Content-Type": "text/plain;charset=UTF-8",
  },
};

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
    server.use(morgan("dev"));
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    server.use("/api/v1/auth", authRoutes, userRoutes);
    server.use("/api/v1/portfolios", portfolioRoutes);
    server.use("/api/v1/blogs", blogRoutes);
    server.use("/api/v1/book", bookRoutes);
    server.use("/api/v1/project", projectRoutes);

    server.use(function (err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res
          .status(401)
          .send({ title: "Unauthorized", detail: "Unauthorized Access!" });
      }
    });
    server.get("/robots.txt", (req, res) => {
      return res.status(200).sendFile("robots.txt", robotsOptions);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
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
