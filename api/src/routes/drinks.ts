import express, { Request, Response } from "express";
import { drinksController } from "../controllers";

export const router = express.Router({
  strict: true,
  caseSensitive: true,
});

router.get("/", (req: Request, res: Response) => {
  drinksController.read(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  drinksController.show(req, res);
});

router.patch("/:id", (req: Request, res: Response) => {
  drinksController.update(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  drinksController.delete(req, res);
});

router.get("/promocion", (req: Request, res: Response) => {
  drinksController.read(req, res);
});

router.get("/promocion/:id", (req: Request, res: Response) => {
  drinksController.show(req, res);
});

router.get("/listar", (req: Request, res: Response) => {
  drinksController.list(req, res);
});
