import express, { Request, Response } from "express";
import { mainsController } from "../controllers";

export const router = express.Router({
  strict: true,
  caseSensitive: true,
});

router.get("/", (req: Request, res: Response) => {
  mainsController.read(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  mainsController.show(req, res);
});

router.patch("/:id", (req: Request, res: Response) => {
  mainsController.update(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  mainsController.delete(req, res);
});

router.get("/promocion", (req: Request, res: Response) => {
  mainsController.read(req, res);
});

router.get("/promocion/:id", (req: Request, res: Response) => {
  mainsController.show(req, res);
});

router.get("/listar", (req: Request, res: Response) => {
  mainsController.list(req, res);
});
