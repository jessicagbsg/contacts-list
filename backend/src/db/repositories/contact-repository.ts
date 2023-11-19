import {
  CreateContactDto,
  ContactFilters,
  UpdateContactDto,
} from "../../shared/types";
// import { prismaClient } from "./prisma/prismaClient";

export default class ContactRepository {
  async create(contact: CreateContactDto): Promise<void> {}

  async listOneById(contactId: number): Promise<void> {}

  async listAll(): Promise<void> {}

  async listByLastName(options: ContactFilters): Promise<void> {}

  async updateOneById(
    contactId: number,
    contact: UpdateContactDto
  ): Promise<void> {}

  async deleteOneById(contactId: number): Promise<void> {}
}
