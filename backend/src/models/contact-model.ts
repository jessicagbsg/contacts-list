export interface Contact {
  id?: number;
  first_name: string;
  last_name: string;
  full_name?: string;
  phone: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
