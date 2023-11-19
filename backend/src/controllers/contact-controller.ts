import { Request, Response } from "express";
import ContactService from "../services/contact-service";

export default class ContactController {
  contactService: ContactService;

  constructor() {
    this.contactService = new ContactService();
  }

  async create(request: Request, response: Response): Promise<void> {}

  async list(request: Request, response: Response): Promise<void> {}

  async updateOneById(request: Request, response: Response): Promise<void> {}

  async deleteOneById(request: Request, response: Response): Promise<void> {}
}
