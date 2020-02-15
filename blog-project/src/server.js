import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";

const app = express();

dotenv.config();

// 1. 확장자를 .pug로 검색한다.
// 2.  "views" 폴더를 default경로로 자동 인식한다.
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes.home, globalRouter);
app.use("/removeTodo", globalRouter);

app.listen(process.env.PORT, () => console.log("server start"));
