import express, { Request, Response } from "express";
import { cartController } from "../controllers";

export const router = express.Router({
  strict: true,
  caseSensitive: true,
});

router.get("/", (req: Request, res: Response) => {
  cartController.read(req, res);
});

router.patch("/product", (req: Request, res: Response) => {
  cartController.update(req, res);
});

router.delete("/product", (req: Request, res: Response) => {
  cartController.delete(req, res);
});

router.get("/promocion", (req: Request, res: Response) => {
  cartController.read(req, res);
});

router.get("/listar", (req: Request, res: Response) => {
  cartController.list(req, res);
});
router.post("/product", (req: Request, res: Response) => {
    cartController.create(req, res);
  });
