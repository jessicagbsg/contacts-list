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
      orderBy: {
        full_name: "asc",
      },
    });
  }

  async listByLastName(options: ContactFilters): Promise<Contact[]> {
    return await prismaClient.contact.findMany({
      where: {
        AND: [
          {
            last_name: {
              contains: options?.last_name?.toLowerCase(),
            },
          },
          {
            deleted_at: null,
          },
        ],
      },
      orderBy: {
        full_name: "asc",
      },
    });
  }

  async updateOneById(id: number, contact: UpdateContactDto): Promise<Contact> {
    try {
      const contactExists = await this.getContactById(id);

      if (!contactExists) {
        throw new Error("Contact doesn't exist");
      }

      if (contact.phone) {
        const phoneAlreadyRegistered = await this.getContactByPhone(
          contact.phone
        );
        if (phoneAlreadyRegistered) {
          throw new Error("Phone number is already registered");
        }
      }

      return await prismaClient.contact.update({
        where: {
          id,
        },
        data: contact,
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deleteOneById(id: number): Promise<Contact> {
    try {
      // soft delete:
      // return await prismaClient.contact.update({
      //   where: {
      //     id,
      //   },
      //   data: {
      //     deleted_at: new Date(),
      //   },
      // });

      return await prismaClient.contact.delete({ where: { id } });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  private async getContactByPhone(phone: string): Promise<Contact> {
    return prismaClient.contact.findFirst({
      where: { phone },
    });
  }

  private async getContactById(id: number): Promise<Contact> {
    return prismaClient.contact.findFirst({
      where: { id },
    });
  }
}
