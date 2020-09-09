import { Request, Response } from "express";
import { CrudController } from "./crudControllers";
import menu from "../../menu.json";

const drinksMenu = menu.drinks;

export class DrinksController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented");
  }

  public read(req: Request, res: Response): void {
    res.json(drinksMenu);
  }

  public show(req: Request, res: Response): void {
    const { id } = req.params;
    const drinksForId = drinksMenu.find((el) => el.id.toString() === id);
    res.json(drinksForId);
  }

  public update(req: Request, res: Response): void {
    const { id } = req.params;
    const { count } = req.body;
    const updateCountDrinks = drinksMenu.find((el) => el.id.toString() === id);
    if (updateCountDrinks) {
      updateCountDrinks.count = count;
    }
    res.json(updateCountDrinks);
  }

  public delete(req: Request, res: Response): void {
    const { id }: any = req.params;
    const idxToDeleteDrinks = drinksMenu.findIndex(
      (obj) => obj.id.toString() === id
    );
    drinksMenu.splice(idxToDeleteDrinks, 1);
    res.json(idxToDeleteDrinks);
  }

  public list(req: Request, res: Response): void {
    res.json({ message: "Va a listar" });
  }
}
