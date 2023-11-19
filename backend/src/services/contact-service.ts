import {
  CreateContactDto,
  ContactFilters,
  UpdateContactDto,
} from "../shared/types";
import ContactRepository from "../db/repositories/contact-repository";
import { Contact } from "../models/contact-model";

export default class ContactService {
  contactRepository: ContactRepository;

  constructor() {
    this.contactRepository = new ContactRepository();
  }

  async create(contact: CreateContactDto): Promise<Contact> {
    const validContact = await this.validateContact(contact);

    if (!validContact.valid) {
      throw new Error(validContact.message);
    }

    return await this.contactRepository.create(contact);
  }

  async list(options?: ContactFilters): Promise<Contact[]> {
    if (options) {
      return await this.contactRepository.listByLastName(options);
    }
    return await this.contactRepository.listAll();
  }

  async updateOneById(
    contactId: number,
    contact: UpdateContactDto
  ): Promise<Contact> {
    const validContact = await this.validateContact(contact);

    if (!validContact.valid) {
      throw new Error(validContact.message);
    }

    return await this.contactRepository.updateOneById(contactId, contact);
  }

  async deleteOneById(contactId: number): Promise<Contact> {
    return await this.contactRepository.deleteOneById(contactId);
  }

  private async validateContact(contact: Partial<Contact>): Promise<{
    valid: boolean;
    message: string;
  }> {
    const nameRegex = /^[A-Za-z]+(?:[-' ][A-Za-z]+)?$/;
    const phoneRegex = /^\+?1?[.-]?\(?\d{3}\)?[.-]?\d{3}[.-]?\d{4}$/;

    let validContact = true;
    let errorMessage: string;

    if (contact.first_name && !contact?.first_name?.match(nameRegex)) {
      validContact = false;
      errorMessage = "First name format is invalid";
    }

    if (contact.last_name && !contact?.last_name?.match(nameRegex)) {
      validContact = false;
      errorMessage = "Last name format is invalid";
    }

    if (contact.phone && !contact.phone.match(phoneRegex)) {
      validContact = false;
      errorMessage = "Phone number format is invalid";
    }

    return {
      valid: validContact,
      message: errorMessage,
    };
  }
}
