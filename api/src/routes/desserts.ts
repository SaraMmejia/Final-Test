import express, { Request, Response } from "express";
import { desserstController } from "../controllers";

export const router = express.Router({
  strict: true,
  caseSensitive: true,
});

router.get("/", (req: Request, res: Response) => {
  desserstController.read(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  desserstController.show(req, res);
});

router.patch("/:id", (req: Request, res: Response) => {
  desserstController.update(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  desserstController.delete(req, res);
});

router.get("/promocion", (req: Request, res: Response) => {
  desserstController.read(req, res);
});

router.get("/promocion/:id", (req: Request, res: Response) => {
  desserstController.show(req, res);
});

router.get("/listar", (req: Request, res: Response) => {
  desserstController.list(req, res);
});
