import express from "express";
import cors from "cors";
import { testRoute } from "./routes/testRoute";
import { config } from "dotenv";
import { DatabaseConnection } from "./modules/db/DatabaseInit";
import { searchRouter } from "./routes/searchRoutes";
import { insertRouter } from "./routes/insertRoutes";
import { deleteRouter } from "./routes/deleteRoutes";
//Initing .env file
config();

// Currently enabled CORS from everywhere
// TODO change it when in prod

//Adding middlewares
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://leniorko.github.io/college-japanece-point",
    ],
    credentials: true,
    allowedHeaders:
      "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json",
  })
);
const PORT = process.env.PORT;

export const databaseConnetction = new DatabaseConnection(
  process.env.DATABASE!!
);

//Adding routes to app
app.use("/testRoute", testRoute);
app.use("/api/v1/search", searchRouter);
app.use("/api/v1/insert", insertRouter);
app.use("/api/v1/delete", deleteRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
