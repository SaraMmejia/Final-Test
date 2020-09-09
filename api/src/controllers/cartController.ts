import { Request, Response } from "express";
import { CrudController } from "./crudControllers";

export class CartController extends CrudController {
  public create(req: Request, res: Response): void {
    res.json({ message: "POST /cart estamos creando en cart" });
  }

  public read(req: Request, res: Response): void {
    res.json({ message: "GET /cart estamos creando en cart" });
  }

  public update(req: Request, res: Response): void {
    res.json({ message: "PATCH /cart estamos actualizando en cart" });
  }

  public delete(req: Request, res: Response): void {
    res.json({ message: "DELETE /cart estamos elinando de cart" });
  }

  public list(req: Request, res: Response): void {
    res.json({ message: "Va a listar" });
  }
}
