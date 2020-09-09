import { MainsController } from "./mainsController";
import { DrinksController } from "./drinksController";
import { DessertsController } from "./desserstController";
import { CartController } from "./cartController";

const mainsController = new MainsController();
const drinksController = new DrinksController();
const desserstController = new DessertsController();
const cartController = new CartController();

export {
  mainsController,
  drinksController,
  desserstController,
  cartController,
};
