import { createNewUser } from "./handlers/user";
import { protect, signin } from "./modules/auth";
import express from "express";
import morgan from "morgan";
import router from "./router";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200);
  res.end("Hello from GET");
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;
