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

      const createdContact = await prismaClient.contact.create({
        data: contact,
      });

      const { id, ...createdContactWithoutId } = createdContact;

      return createdContactWithoutId;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async listOneById(contactId: number): Promise<void> {}

  async listAll(): Promise<void> {}

  async listByLastName(options: ContactFilters): Promise<void> {}

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
