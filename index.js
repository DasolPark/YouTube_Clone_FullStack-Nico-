import express from "express";
import morgan from "morgan";
import helmet from "helmet";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localholst:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(helmet());
app.use(morgan("dev"));

const middleware = (req, res, next) => {
  res.send("Not happening");
};

app.get("/", middleware, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
