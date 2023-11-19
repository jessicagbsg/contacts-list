import { Router } from "express";
import ContactController from "../controllers/contact-controller";

const contactController = new ContactController();

export default (router: Router): void => {
  router.post("/create", contactController.create.bind(this));
  router.get("/list", contactController.list.bind(this));
  router.get("/update", contactController.updateOneById.bind(this));
  router.get("/delete", contactController.deleteOneById.bind(this));
};
