export interface Contact {
  id?: number;
  first_name: string;
  last_name: string;
  full_name?: string;
  phone: string;
}

export type ContactResponse = Omit<Contact, "id">;
