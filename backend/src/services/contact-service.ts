import {
  CreateContactDto,
  ContactFilters,
  UpdateContactDto,
} from "../shared/types";
import ContactRepository from "../db/repositories/contact-repository";
import { ContactResponse } from "../models/contact-model";

export default class ContactService {
  contactRepository: ContactRepository;

  constructor() {
    this.contactRepository = new ContactRepository();
  }

  async create(contact: CreateContactDto): Promise<ContactResponse> {
    const validContact = await this.validateContact(contact);

    if (!validContact.valid) {
      throw new Error(validContact.message);
    }

    return await this.contactRepository.create(contact);
  }

  async list(options?: ContactFilters): Promise<void> {}

  async updateOneById(
    contactId: number,
    contact: UpdateContactDto
  ): Promise<void> {}

  async deleteOneById(contactId: number): Promise<void> {}

  private async validateContact(contact: CreateContactDto): Promise<{
    valid: boolean;
    message: string;
  }> {
    const nameRegex = /^[A-Za-z]+(?:[-' ][A-Za-z]+)?$/;
    const phoneRegex = /^\+?1?[.-]?\(?\d{3}\)?[.-]?\d{3}[.-]?\d{4}$/;

    let validContact = true;
    let errorMessage: string;

    if (!contact.first_name.match(nameRegex)) {
      validContact = false;
      errorMessage = "First name or last name format is invalid";
    }

    if (!contact.phone.match(phoneRegex)) {
      validContact = false;
      errorMessage = "Phone number format is invalid";
    }

    return {
      valid: validContact,
      message: errorMessage,
    };
  }
}
