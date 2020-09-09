import { Request, Response } from "express";
import { CrudController } from "./crudControllers";
import menu from "../../menu.json";

const dessertsMenu = menu.desserts;

export class DessertsController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented");
  }

  public read(req: Request, res: Response): void {
    res.json(dessertsMenu);
  }

  public show(req: Request, res: Response): void {
    const { id } = req.params;
    const dessertsForId = dessertsMenu.find((el) => el.id.toString() === id);
    res.json(dessertsForId);
  }

  public update(req: Request, res: Response): void {
    const { id } = req.params;
    const { count } = req.body;
    const updateCountDesserts = dessertsMenu.find(
      (el) => el.id.toString() === id
    );
    if (updateCountDesserts) {
      updateCountDesserts.count = count;
    }
    res.json(updateCountDesserts);
  }

  public delete(req: Request, res: Response): void {
    const { id } = req.params;
    const idxDeleteDesserts = dessertsMenu.findIndex(
      (obj) => obj.id.toString() === id
    );
    dessertsMenu.splice(idxDeleteDesserts, 1);
    res.json(idxDeleteDesserts);
  }

  public list(req: Request, res: Response): void {
    res.json({ message: "Va a listar" });
  }
}
