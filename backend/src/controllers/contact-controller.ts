import { Request, Response } from "express";
import ContactService from "../services/contact-service";
import { Contact } from "../models/contact-model";
import { ContactFilters } from "../shared/types";

export default class ContactController {
  contactService: ContactService;

  constructor() {
    this.contactService = new ContactService();
  }

  async create(request: Request, response: Response): Promise<Contact> {
    try {
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
      return createdContact;
    } catch (err) {
      response.status(400).json({
        message: err.message,
      });
    }
  }

  async list(request: Request, response: Response): Promise<Contact[]> {
    try {
      if (!this.contactService) {
        this.contactService = new ContactService();
      }

      const filters: ContactFilters = request.query;

      const contacts = await this.contactService.list(filters);
      response.status(200).json(contacts);
      return contacts;
    } catch (err) {
      response.status(400).json({
        message: err.message,
      });
    }
  }

  async updateOneById(request: Request, response: Response): Promise<Contact> {
    try {
      if (!this.contactService) {
        this.contactService = new ContactService();
      }

      const { body } = request;

      if (!body.first_name && !body.last_name && !body.phone) {
        response
          .status(400)
          .json({ message: "There should be at least one change" });
        return;
      }

      const { id } = request.params;

      const updatedContact = await this.contactService.updateOneById(+id, body);
      response.status(200).json(updatedContact);
      return updatedContact;
    } catch (err) {
      response.status(400).json({
        message: err.message,
      });
    }
  }

  async deleteOneById(request: Request, response: Response): Promise<Contact> {
    try {
      if (!this.contactService) {
        this.contactService = new ContactService();
      }

      const { id } = request.params;

      const deletedContact = await this.contactService.deleteOneById(+id);
      response.status(204).json(deletedContact);
      return deletedContact;
    } catch (err) {
      response.status(400).json({
        message: err.message,
      });
    }
  }
}
