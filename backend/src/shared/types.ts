export interface ContactFilters {
  last_name?: string;
}

export interface UpdateContactDto {
  first_name?: string;
  last_name?: string;
  phone?: string;
}

export interface CreateContactDto {
  first_name: string;
  last_name: string;
  full_name: string;
  phone: string;
}
