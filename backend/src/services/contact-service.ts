import {
  CreateContactDto,
  ContactFilters,
  UpdateContactDto,
} from "../shared/types";
import ContactRepository from "../db/repositories/contact-repository";

export default class ContactService {
  contactRepository: ContactRepository;

  constructor() {
    this.contactRepository = new ContactRepository();
  }

  async create(contact: CreateContactDto): Promise<void> {}

  async list(options?: ContactFilters): Promise<void> {}

  async updateOneById(
    contactId: number,
    contact: UpdateContactDto
  ): Promise<void> {}

  async deleteOneById(contactId: number): Promise<void> {}
}
