import { Request, Response } from "express";
import ContactService from "../services/contact-service";
import { ContactResponse } from "../models/contact-model";

export default class ContactController {
  contactService: ContactService;

  constructor() {
    this.contactService = new ContactService();
  }

  async create(request: Request, response: Response): Promise<ContactResponse> {
    try {
      if (!request.body) {
        response.status(400).json({ message: "contact is required" });
        return;
      }
      if (!this.contactService) {
        this.contactService = new ContactService();
      }
      const { body } = request;

      if (!body.first_name || !body.last_name || !body.phone) {
        response.status(400).json({ message: "missing required fields" });
        return;
      }

      const createdContact = await this.contactService.create(body);

      response.status(201).json(createdContact);
      return;
    } catch (error) {
      response.status(400).json({
        message: error.message,
      });
    }
  }

  async list(request: Request, response: Response): Promise<void> {}

  async updateOneById(request: Request, response: Response): Promise<void> {}

  async deleteOneById(request: Request, response: Response): Promise<void> {}
}
