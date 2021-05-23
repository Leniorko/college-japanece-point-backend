import { Router } from "express";
import { ParsedQs } from "qs";
import { databaseConnetction } from "../app";
import { JapanesePointQuery } from "../modules/db/Models";

export const searchRouter = Router();

// UNSAFE will find everything that will be passed
// TODO Create filter for query
searchRouter.get("/", async (req, res) => {
  const body: JapanesePointQuery = req.body;
  console.log(body);

  const result = await databaseConnetction.databaseClient
    .db("japanesePoint")
    .collection("games")
    .find(body)
    .toArray();

  res.status(200).send(result);
});
