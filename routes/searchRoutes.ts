import { Router } from "express";
import { ParsedQs } from "qs";
import { databaseConnetction } from "../app";
import { JapanesePointQuery } from "../modules/db/Models";

export const searchRouter = Router();

// UNSAFE will find everything that will be passed
// TODO Create filter for query

/**
 * Search for games in database
 * With empty body returns every game
 */
searchRouter.post("/", async (req, res) => {
  const body = req.body;

  const result = await databaseConnetction.databaseClient
    .db("japanesePoint")
    .collection("games")
    .find(body)
    .toArray();

  console.log(result);

  res.status(200).send(result);
});
