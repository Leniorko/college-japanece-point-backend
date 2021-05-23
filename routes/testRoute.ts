import { Router } from "express";

export const testRoute = Router();

// Middleware that calling on every request to route
testRoute.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

testRoute.get("/", (req, res) => {
  res.send("Test page is up and running");
});

testRoute.get("/second", (req, res) => {
  res.send("This is second page");
});
