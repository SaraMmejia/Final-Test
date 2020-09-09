import { Request, Response } from "express";
import { CrudController } from "./crudControllers";
import menu from "../../menu.json";
import { request } from "http";

const mainsMenu = menu.mains;

export class MainsController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented");
  }

  public read(req: Request, res: Response): void {
    res.json(mainsMenu);
  }

  public show(req: Request, res: Response): void {
    const { id } = req.params;
    const mainForId = mainsMenu.find((el) => el.id.toString() === id);

    res.json(mainForId);
  }

  public update(req: Request, res: Response): void {
    const { id } = req.params;
    const { count } = req.body;
    const updateCountMains = mainsMenu.find((el) => el.id.toString() === id);
    if (updateCountMains) {
      updateCountMains.count = count;
    }
    res.json(updateCountMains);
  }

  public delete(req: Request, res: Response): void {
    const { id }: any = req.params;
    console.log(mainsMenu);
    const idxToDeleteMains = mainsMenu.findIndex(
      (obj) => obj.id.toString() === id
    );
    console.log("pos del id", idxToDeleteMains);
    mainsMenu.splice(idxToDeleteMains, 1);
    res.json(mainsMenu);
  }

  public list(req: Request, res: Response): void {
    res.json({ message: "Va a listar" });
  }
}
