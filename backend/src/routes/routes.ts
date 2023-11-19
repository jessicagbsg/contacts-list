import { Router } from "express";
import ContactController from "../controllers/contact-controller";

const contactController = new ContactController();

export default (router: Router): void => {
  router.post("", contactController.create.bind(this));
  router.get("", contactController.list.bind(this));
  router.patch("/update/:id", contactController.updateOneById.bind(this));
  router.delete("/delete/:id", contactController.deleteOneById.bind(this));
};
