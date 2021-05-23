import { Router } from "express";
import { databaseConnetction } from "../app";
import { JapanesePointQuery } from "../modules/db/Models";

export const insertRouter = Router();

// UNSAFE TOO
// Will insert anything
insertRouter.post("/", async (req, res) => {
  const body: JapanesePointQuery = req.body;
  await databaseConnetction.databaseClient
    .db("japanecePoint")
    .collection("games")
    .insertOne(body, (err, result) => {
      if (err) {
        console.log("Error during insertion: " + err);
        res.status(400).send(err);
        return;
      }

      console.log("Inserted: " + result);
      res.status(200).send(result);
    });
});
