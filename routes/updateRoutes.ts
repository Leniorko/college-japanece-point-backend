import { Router } from "express";
import { databaseConnetction } from "../app";

export const updateRouter = Router();

/**
 * Pass object when doing query here
 * {
 * id: number,
 * isInCart: bool
 * }
 */
updateRouter.post("/", (req, res) => {
  databaseConnetction.databaseClient
    .db("japanesePoint")
    .collection("games")
    .updateOne({ id: req.body.id }, { $set: { isInCart: req.body.isInCart } });

  res.status(200).send();
});
