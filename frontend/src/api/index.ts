import axios from "axios";
import type {
  Contact,
  ContactFilters,
  CreateContactDto,
  UpdateContactDto,
} from "../types";

export const httpClient = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export async function create(data: CreateContactDto) {
  const response = await httpClient.post<Contact>("", {
    data,
  });
  return response.data;
}

export async function listContacts(filters?: ContactFilters) {
  const response = await httpClient.get<Contact[]>("", {
    params: {
      ...filters,
    },
  });
  return response.data;
}

export async function updateContact(id: number, data: UpdateContactDto) {
  const response = await httpClient.patch<Contact>(`/update/${id}`, {
    data,
  });
  return response.data;
}

export async function deleteContact(id: number) {
  const response = await httpClient.delete<Contact>(`/delete/${id}`);
  return response.data;
}
