import { ContactResponse } from "../../models/contact-model";
import {
  CreateContactDto,
  ContactFilters,
  UpdateContactDto,
} from "../../shared/types";

import { prismaClient } from "../prisma/prismaCLient";

export default class ContactRepository {
  async create(contact: CreateContactDto): Promise<ContactResponse> {
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

      const { id, ...createdContactWithoutId } = createdContact;

      return createdContactWithoutId;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async listAll(): Promise<ContactResponse[]> {
    return await prismaClient.contact.findMany();
  }

  async listByLastName(options: ContactFilters): Promise<ContactResponse[]> {
    return await prismaClient.contact.findMany({
      where: {
        last_name: options.last_name.toLowerCase(),
      },
    });
  }

  async updateOneById(
    contactId: number,
    contact: UpdateContactDto
  ): Promise<void> {}

  async deleteOneById(contactId: number): Promise<void> {}

  private async getContactByPhone(
    phone: string
  ): Promise<ContactResponse | undefined> {
    return prismaClient.contact.findFirst({
      where: { phone },
    });
  }
}
