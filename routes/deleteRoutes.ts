import { Router } from "express";
import { databaseConnetction } from "../app";
import { JapanesePointQuery } from "../modules/db/Models";

export const deleteRouter = Router();

// UNSAFE TOO
// Will delete anything that you will pass without checking anything
deleteRouter.post("/", async (req, res) => {
  const body: JapanesePointQuery = req.body;
  await databaseConnetction.databaseClient
    .db("japanesePoint")
    .collection("games")
    .deleteOne(body, (error, result) => {
      if (error) {
        console.log("Error during insertion: " + error);
        res.status(400).send(error);
        return;
      }

      console.log("Deleted: " + result);
      res.status(200).send(result);
    });
});
