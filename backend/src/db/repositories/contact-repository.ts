import { Contact } from "../../models/contact-model";
import {
  CreateContactDto,
  ContactFilters,
  UpdateContactDto,
} from "../../shared/types";

import { prismaClient } from "../prisma/prismaCLient";

export default class ContactRepository {
  async create(contact: CreateContactDto): Promise<Contact> {
    try {
      const contactAlreadyExists = await this.getContactByPhone(contact.phone);

      if (contactAlreadyExists) {
        throw new Error("Phone number is already registered");
      }

      contact.full_name = `${contact.first_name} ${contact.last_name}`;
      contact.first_name = contact.first_name.toLowerCase();
      contact.last_name = contact.last_name.toLowerCase();

      const createdContact = await prismaClient.contact.create({
        data: contact,
      });

      return createdContact;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async listAll(): Promise<Contact[]> {
    return await prismaClient.contact.findMany({
      where: {
        deleted_at: null,
      },
    });
  }

  async listByLastName(options: ContactFilters): Promise<Contact[]> {
    return await prismaClient.contact.findMany({
      where: {
        AND: [
          {
            last_name: options.last_name.toLowerCase(),
          },
          {
            deleted_at: null,
          },
        ],
      },
    });
  }

  async updateOneById(
    contactId: number,
    contact: UpdateContactDto
  ): Promise<void> {}

  async deleteOneById(contactId: number): Promise<void> {}

  private async getContactByPhone(phone: string): Promise<Contact | undefined> {
    return prismaClient.contact.findFirst({
      where: { phone },
    });
  }
}
