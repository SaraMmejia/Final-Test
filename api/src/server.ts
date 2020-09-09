import express from "express";
import path from "path";
import cors from "cors";
import {
  mainsRouter,
  drinksRouter,
  dessertsRouter,
  cartRouter,
} from "./routes";

const port = process.env.NODE_PORT || 4848;
const publicPath = path.resolve(__dirname, "./public");

export function run() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/static", express.static(publicPath));
  app.use("/mains", mainsRouter);
  app.use("/drinks", drinksRouter);
  app.use("/desserts", dessertsRouter);
  app.use("/cart", cartRouter);

  return app.listen(port, function () {
    console.log(`Listening on http://localhost:${port}`);
  });
}

if (process.env.NODE_ENV !== "testing") {
  run();
}
