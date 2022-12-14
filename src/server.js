import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
// import videoRouter from "./routers/videoRouter";
// import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", rootRouter);

export default app;