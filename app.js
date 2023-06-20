const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const notFound = require("./middlewares/notFound"); // *
const dotenv = require("dotenv");
dotenv.config();
const errorHandler = require("./middlewares/errorHandle");
connectDb();

app.use("/media/", express.static(path.join(__dirname, "media")));
app.use(morgan("dev"));
app.use(cors);
app.use(express.json());
app.use("/posts", postsRoutes);
app.use(notFound);
// if we tried to put a path that doesn't exist in postman it will go
// directly to (notFound)
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`The application is running on localhost:${process.env.PORT}`);
});
